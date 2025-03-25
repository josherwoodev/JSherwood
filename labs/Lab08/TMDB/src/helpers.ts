import axios from "axios";
import {useEffect, useState} from "react";

const BASE_URL = "https://image.tmdb.org/t/p";
export const SIZE_185 = 185;
export const SIZE_342 = 342;

// export const SIZE_500 = 500;

export function reqNowPlaying() {
    return axios.get("https://api.themoviedb.org/3/movie/now_playing", {headers: {Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`}});
}

export function reqSearch(str: string) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${encodeURI(str)}`, {headers: {Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`}});
}

export function buildImgRef(url: string, isSmall = true): string {
    return `${BASE_URL}/w${isSmall ? SIZE_185 : SIZE_342}/${url.split(".")[-1] === "svg" ? url.replace(".svg", ".png") : url}`;
}

export function useWindowDimensions() {
    const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight});

    useEffect(() => {
        function getDimensions() {
            setDimensions({width: window.innerWidth, height: window.innerHeight});
        }

        window.addEventListener("resize", getDimensions);
        return () => window.removeEventListener("resize", getDimensions);
    }, []);

    return dimensions;
}