// =====    General Code    ====
async function loadPageScript() {
  let isLoaded = false;
  if (document.readyState === 'complete') isLoaded = true;
  else window.addEventListener('load', () => (isLoaded = true));

  while (!isLoaded) await new Promise((resolve) => setTimeout(resolve, 20));

  init();
}

function getCurrentPage() {
  let res = /(?<=\/Lab04\/)\w+(?=\.html)/.exec(window.location.pathname);
  return res ? res[0] : null;
}

function init() {
  let currentPage = getCurrentPage();
  switch (currentPage) {
    case 'menu':
      prepareMenu();
      break;
    case 'hiring':
      prepareHiring();
      break;
    case 'index':
      prepareIndex();
      break;
    default:
      console.error('Failure to extract current page url');
  }
}

function getSiblingsByTag(elem, tagName) {
  return Array.from(elem.parentNode.children).filter(
    (child) => child !== elem && child.tagName === tagName.toUpperCase(),
  );
}

// =====    index.html Code ====
function prepareIndex() {
  console.log('Currently no script to run in index.html');
}

// =====    menu.html Code  ====
const ASSETS = 'assets/';
let menuItems = [
  {
    src: ASSETS + 'skunk01.png',
    alt: 'large image of roadkill skunk',
    desc: 'Suck-ees signature dish! Iconic black & white fur included.',
    price: 28,
    name: 'Signature Skunk',
  },
  {
    src: ASSETS + 'roadkill.jpg',
    alt: 'image of roadkill raccoon',
    desc: 'Scraped up fresh from the side of the road.',
    price: 12,
    name: 'Roadkill Strip',
  },
  {
    src: ASSETS + 'skunk02.jpg',
    alt: 'image of small roadkill skunk',
    desc: 'Signature Suck-ees Skunk, dried and seasoned for a bite on the road.',
    price: 17,
    name: 'Skunk Jerky',
  },
  {
    src: ASSETS + 'turtleSoup.png',
    alt: 'image of pot of soup with large meat chunks floating in it',
    desc: 'Turtle soup imported directly from Cannibal Island, as seen in Sons of the Forest.',
    price: 16,
    name: "Neebs' Gaming Special",
  },
  {
    src: ASSETS + 'leg.png',
    alt: 'image of a leg severed from a cannibal',
    desc: 'Even bigger than a turkey leg, enjoy this exotic feast from Cannibal Island.',
    price: 21,
    name: 'Cannibal Leg',
  },
];
let currentMenuItem = 0;

function prepareMenu() {
  document.getElementById('prev').addEventListener('click', loadPrevMenuItem);
  document.getElementById('next').addEventListener('click', loadNextMenuItem);
  updateMenuItem(currentMenuItem);
}

function updateMenuItem(index) {
  let img = document.getElementById('menu-image');
  img.src = menuItems[index].src;
  img.alt = `${menuItems[index].name}: ${menuItems[index].alt}`;
  document.getElementById('menu-title').textContent = menuItems[index].name;
  document.getElementById('menu-description').textContent =
    menuItems[index].desc;
  document.getElementById('menu-price').textContent = new Intl.NumberFormat(
    'en-US',
    { style: 'currency', currency: 'USD' },
  ).format(menuItems[index].price);
}

function loadPrevMenuItem(mouseEvent) {
  currentMenuItem = (currentMenuItem - 1 + menuItems.length) % menuItems.length;
  updateMenuItem(currentMenuItem);
}

function loadNextMenuItem(mouseEvent) {
  currentMenuItem = (currentMenuItem + 1 + menuItems.length) % menuItems.length;
  updateMenuItem(currentMenuItem);
}

// =====    hiring.html Code    ====
const FIELDS = [
  { id: 'firstName', handler: (e) => handleName(e.target) },
  { id: 'lastName', handler: (e) => handleName(e.target) },
  { id: 'age', handler: (e) => handleAge(e.target) },
  { id: 'address1', handler: (e) => handleAddress(e.target) },
  { id: 'address2', handler: (e) => handleAddress(e.target) },
  { id: 'city', handler: (e) => handleCity(e.target) },
  { id: 'state', handler: (e) => handleState(e.target) },
  { id: 'zip', handler: (e) => handleZip(e.target) },
  { id: 'email', handler: (e) => handleEmail(e.target) },
  { id: 'phone', handler: (e) => handlePhone(e.target) },
  { id: 'password', handler: (e) => handlePassword(e.target) },
  { id: 'addedInfo', handler: (e) => handleAddedInfo(e.target) },
];
const PASSWORD_HELPERS = {
  lenReq: {
    id: 'password-validation-tooltip-requirement-length',
    regex: /^.{8,12}$/,
  },
  case: {
    id: 'password-validation-tooltip-requirement-case',
    regex: /(?=.*[a-z])(?=.*[A-Z]).*/,
  },
  num: { id: 'password-validation-tooltip-requirement-num', regex: /.*\d/ },
  special: {
    id: 'password-validation-tooltip-requirement-special',
    regex: /.*\W/,
  },
};
const ADDED_INFO_MAX_LENGTH = 30;

function prepareHiring() {
  document.getElementById('applicant').addEventListener('submit', processForm);
  document
    .getElementById('applicant')
    .addEventListener('reset', resetValidation);
  FIELDS.forEach((field) => {
    document.getElementById(field.id).addEventListener('input', field.handler);
    document.getElementById(field.id).addEventListener('blur', field.handler);
  });
}

function processForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  let data = {};
  for (const key of formData.keys()) {
    if (key === 'colors') data[key] = formData.getAll(key);
    else data[key] = formData.get(key);
  }
  data['phone'] = data['phone'].replace(/\W/g, '');
  data['age'] = Number(data['age']);
  console.log(JSON.stringify(data));
}

function resetValidation(event) {
  document.getElementById('state').classList.remove('is-valid');
  document.getElementById('state').classList.add('is-invalid');
  document.getElementById('addedInfo-char-count').textContent =
    `${ADDED_INFO_MAX_LENGTH}/${ADDED_INFO_MAX_LENGTH}`;
  for (const child of Array.prototype.slice.call(
    event.target.getElementsByTagName('input'),
  ))
    child.classList.remove('is-valid', 'is-invalid');
}

function inputDisplayValidity(elem, isValid) {
  if (elem.required) {
    elem.classList.remove('is-valid', 'is-invalid');
    elem.classList.add(isValid ? 'is-valid' : 'is-invalid');
  }
}

function handleName(elem) {
  if (elem.value) {
    elem.value = elem.value.replace(/[^\- _\w]/g, '').slice(0, 20);
    inputDisplayValidity(elem, validateName(elem.value.trim()));
  } else inputDisplayValidity(elem, false);
}

function validateName(value) {
  return /^[a-zA-Z\- _]{1,20}$/.test(value);
}

function handleAge(elem) {
  if (elem.value) {
    inputDisplayValidity(elem, validateAge(elem.value.trim()));
  } else inputDisplayValidity(elem, false);
}

function validateAge(value) {
  let num = Number(value);
  return num ? num > 20 && num < 100 : false;
}

function handleAddress(elem) {
  if (elem.value) {
    elem.value = elem.value.slice(0, 40);
    inputDisplayValidity(elem, elem.value.length);
  } else inputDisplayValidity(elem, false);
}

function handleCity(elem) {
  if (elem.value) {
    inputDisplayValidity(elem, validateCity(elem.value.trim()));
  } else inputDisplayValidity(elem, false);
}

function validateCity(value) {
  return value && /([\- _']*\w)+/g.test(value);
}

function handleState(elem) {
  inputDisplayValidity(elem, elem.value);
}

function handleZip(elem) {
  if (elem.value) {
    let temp = elem.value
      .replace(/(^0)|\D/, '')
      .trim()
      .slice(0, 9)
      .match(/^\d{5}|\d+/g);
    elem.value = temp ? temp.join('-') : null;
    inputDisplayValidity(elem, validateZip(elem.value));
  } else inputDisplayValidity(elem, false);
}

function validateZip(value) {
  return value && /^[1-9]\d{4}(-\d{4})?$/.test(value);
}

function handleEmail(elem) {
  if (elem.value) {
    inputDisplayValidity(elem, validateEmail(elem.value.trim()));
  } else inputDisplayValidity(elem, false);
}

function validateEmail(value) {
  return /^\w+[\w.]*@(\w+.)+\w+$/.test(value);
}

function handlePhone(elem) {
  if (elem.value) {
    formatPhone(elem);
    inputDisplayValidity(elem, validatePhone(elem.value));
  } else inputDisplayValidity(elem, false);
}

function formatPhone(elem) {
  let temp = elem.value
    .replace(/\D/g, '')
    .slice(0, 10)
    .match(/\d{4}$|\d{3}|\d+/g);
  elem.value = temp ? temp.join('-') : null;
}

function validatePhone(value) {
  return /^(\d{3}-){2}\d{4}$/.test(value.trim());
}

function handlePassword(elem) {
  if (elem.value) {
    inputDisplayValidity(elem, validatePassword(elem.value));
  } else inputDisplayValidity(elem, false);
  passwordDisplayValidity(elem, elem.value);
}

function validatePassword(value) {
  return /^(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/.test(value);
}

function passwordDisplayValidity(elem, value) {
  const feedback = getSiblingsByTag(elem, 'div')[0];
  if (feedback) {
    Object.values(PASSWORD_HELPERS).forEach((val) => {
      let helper = feedback.querySelector('#' + val.id);
      helper.classList.remove('text-success');
      helper.getElementsByTagName('i')[0].classList.remove('fa-check', 'fa-x');
      let isValid = val.regex.test(value);
      helper
        .getElementsByTagName('i')[0]
        .classList.add(isValid ? 'fa-check' : 'fa-x');
      helper.classList.add(isValid ? 'text-success' : null);
    });
  }
}

function handleAddedInfo(elem) {
  elem.value = elem.value.slice(0, ADDED_INFO_MAX_LENGTH);
  getSiblingsByTag(elem, 'label')[0].getElementsByTagName(
    'span',
  )[0].textContent =
    `${ADDED_INFO_MAX_LENGTH - elem.value.length}/${ADDED_INFO_MAX_LENGTH}`;
  inputDisplayValidity(elem, elem.value);
}

// =====    Script Launch Point ====
loadPageScript().catch((e) =>
  console.error('Error trying to run page-load script: ' + e),
);
