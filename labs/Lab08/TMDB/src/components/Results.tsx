import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {reqSearch} from "../helpers.ts";
import MovieList from "./MovieList.tsx";

export default function Results() {
    const {searchTerm} = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        reqSearch(searchTerm).then((res) => res.data).then((data) => setMovies(data.results)).catch((err) => console.error(err));
    }, [searchTerm]);

    return (<MovieList movies={movies} />);
}