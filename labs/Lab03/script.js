const HISTORY = [];
const BREEDS = [];
let currentDogIndex = 0;

async function init() {
    const breeds = await getFetch("https://dog.ceo/api/breeds/list/all");
    populateBreeds(breeds);
    buildSelectFromArr("breed-select", BREEDS);
    let dogUrl = await getFetch("https://dog.ceo/api/breeds/image/random");
    let dogBreed = /(?<=images.dog.ceo\/breeds\/).+(?=\/)/.exec(dogUrl)[0];
    HISTORY.push({breed: dogBreed, img: dogUrl});
    updateSelectedBreed(dogBreed);
    updateDogImg(dogUrl, dogBreed);
    addToHistory(dogUrl, dogBreed);
}

function leftBtnClick() {
    if (currentDogIndex > 0) {
        --currentDogIndex;
        updateBreedName(HISTORY[currentDogIndex].breed);
        updateDogImg(HISTORY[currentDogIndex].img, HISTORY[currentDogIndex].breed);
    }
}

async function rightBtnClick() {
    if (currentDogIndex < HISTORY.length - 1) {
        ++currentDogIndex;
        updateBreedName(HISTORY[currentDogIndex].breed);
        updateDogImg(HISTORY[currentDogIndex].img, HISTORY[currentDogIndex].breed);
    } else {
        let breed = getElem("breed-select").value;
        updateBreedName(breed);
        let imgUrl = await reqNewImg(breed);
        updateDogImg(imgUrl, breed);
        HISTORY.push({breed: breed, img: imgUrl});
        ++currentDogIndex;
    }
}

async function getFetch(api) {
    return await fetch(api).then(res => res.json())
        .then(data => data && data.message ? data.message : null)
        .catch(err => console.log(err));
}

async function reqNewImg(breedId) {
    return await getFetch(`https://dog.ceo/api/breed/${splitBreed(breedId)}/images/random`);
}

function splitBreed(breedId) {
    let res = breedId;
    if(breedId.indexOf("-") >= 0) {
        let parts = breedId.split("-");
        res = `${parts[0]}/${parts[1]}`;
    }
    return res;
}

function populateBreeds(breeds) {
    for (let breed in breeds) {
        if (breeds[breed].length > 0)
            for (let subBreed of breeds[breed])
                BREEDS.push({key: `${breed}-${subBreed}`, value: breed == "australian" ? `${breed} ${subBreed}` : `${subBreed} ${breed}`});
        else BREEDS.push({key: breed, value: breed});
    }
}

function buildSelectFromArr(id, arr) {
    for (const pair of arr)
        addOptionToSelect(id, pair.key, pair.value);
}

function addOptionToSelect(id, name, displayName) {
    let elem = document.createElement("option");
    elem.value = name;
    elem.textContent = capitalizeBreed(displayName);
    getElem(id).appendChild(elem);
}

function addToHistory(imgUrl, breedId) {
    HISTORY.push({breed: breedId, img: imgUrl});
}

function updateDogImg(imgUrl, breedId) {
    let elem = getElem("dog-img");
    let alternate = `Image of ${BREEDS[breedIndex(breedId)].value}`;
    elem.src = imgUrl;
    elem.alt = alternate;
    elem.style.display = "block";
}

function getElem(id) {
    return document.getElementById(id);
}

function capitalize(str = "", opts = null) {
    let res = "";
    for (let i = 0, camelLength = opts && opts.camels ? opts.camels.length : 0, n = 0, nextCamel = camelLength ? opts.camels[n] : str.length;
         i < str.length; i = nextCamel, ++n, nextCamel = n < camelLength ? Math.min(opts.camels[n], str.length) : str.length) {
        res += str.charAt(i).toUpperCase() + str.slice(i + 1, nextCamel);
    }
    return res;
}

function capitalizeBreed(str) {
    return capitalize(str, {camels: str.indexOf(" ") >= 0 ? [str.indexOf(" ") + 1] : (str == "stbernard" ? [2] : null)});
}

function breedIndex(breedId) {
    return BREEDS.findIndex(breed => breed.key == breedId);
}

function updateSelectedBreed(dogBreed) {
    updateBreedName(dogBreed);
    getElem("breed-select").value = dogBreed;
}

function updateBreedName(breedId) {
    getElem("breed-name").textContent = BREEDS[breedIndex(breedId)] ? capitalizeBreed(BREEDS[breedIndex(breedId)].value) : "Problem encountered trying to pull";
}

document.addEventListener('DOMContentLoaded', init);
