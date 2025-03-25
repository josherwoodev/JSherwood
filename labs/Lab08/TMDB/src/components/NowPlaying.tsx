import {useEffect, useState} from "react";
import {reqNowPlaying} from "../helpers.ts";
import MovieList from "./MovieList.tsx";

export default function NowPlaying() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        reqNowPlaying().then((res) => res.data).then((data) => setMovies(data.results)).catch((err) => console.error(err));
    }, []);

    return (<MovieList movies={movies} />);
}