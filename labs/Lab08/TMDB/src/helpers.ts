import axios from "axios";

const BASE_URL = "https://image.tmdb.org/t/p";
const SIZE_342 = "w342";
// const SIZE_500 = "w500";

export function reqNowPlaying() {
    return axios.get("https://api.themoviedb.org/3/movie/now_playing", {headers:{Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`}});
}

export function reqSearch(str: string) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${encodeURI(str)}`, {headers:{Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`}});
}

export function buildImgRef(url: string): string {
    return `${BASE_URL}/${SIZE_342}/${url.split(".")[-1] === "svg" ? url.replace(".svg", ".png") : url}`;
}