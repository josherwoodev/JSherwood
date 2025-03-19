import axios from "axios";

export function reqNowPlaying() {
    return axios.get("https://api.themoviedb.org/3/movie/now_playing", {headers:{Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`}});
}

export function reqSearch(str: string) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${encodeURI(str)}`, {headers:{Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`}});
}