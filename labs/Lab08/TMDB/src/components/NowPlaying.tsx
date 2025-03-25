import {useEffect, useState} from "react";
import {reqNowPlaying} from "../helpers.ts";
import MovieList from "./MovieList.tsx";
import {MovieRes} from "../types.ts";

export default function NowPlaying() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        reqNowPlaying().then((res) => res.data).then((data) => setMovies(data.results)).catch((err) => console.error(err));
    }, []);

    return (<MovieList movies={movies}  sort={(a:MovieRes,b:MovieRes) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()} />);
}