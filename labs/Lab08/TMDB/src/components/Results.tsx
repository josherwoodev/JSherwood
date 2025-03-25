import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {reqSearch} from "../helpers.ts";
import {MovieRes} from "../types.ts";
import Card from "./Card.tsx";

export default function Results() {
    const {searchTerm} = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        reqSearch(searchTerm).then((res) => res.data).then((data) => setMovies(data.results)).catch((err) => console.error(err));
    }, [searchTerm]);

    return (<div style={{display: "flex", flexDirection: "row", alignContent: "start", justifyContent: "space-around", flexWrap: "wrap", padding: 10}}>
        {movies.map((movie: MovieRes, index) => (<Card key={index} {...movie}/>))}
    </div>);
}