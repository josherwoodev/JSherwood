import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {reqSearch} from "../helpers.ts";
import MovieList from "./MovieList.tsx";
import Error from "./Error.tsx";

export default function Results() {
    const {searchTerm} = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        reqSearch(searchTerm).then((res) => res.data).then((data) => setMovies(data.results)).catch((err) => console.error(err));
    }, [searchTerm]);

    return (<>{
        movies && movies.length ? <MovieList movies={movies}/>
            : <Error>
                <h2>No results for {searchTerm}</h2>
                <p>Please try again with another search.</p>
            </Error>
    }</>);
}