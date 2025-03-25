import {useEffect, useState} from "react";
import Card from "./Card.tsx";
import {reqNowPlaying} from "../helpers.ts";
import {MovieRes} from "../types.ts";

export default function NowPlaying() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        reqNowPlaying().then((res) => res.data).then((data) => setMovies(data.results)).catch((err) => console.error(err));
    }, []);

    return (<div style={{display: "flex", flexDirection: "row", alignContent: "start", justifyContent: "space-around", flexWrap: "wrap", padding: 10}}>
        {movies.map((movie: MovieRes, index) => (<Card key={index} {...movie}/>))}
    </div>);
}