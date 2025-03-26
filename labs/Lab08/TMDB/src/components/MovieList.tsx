import {MovieRes} from "../types.ts";
import Card from "./Card.tsx";
import {CSSProperties} from "react";

export default function MovieList(props: any) {
    const STYLE:CSSProperties = {display: "flex", flexDirection: "row", alignContent: "start", justifyContent: "space-around", flexWrap: "wrap", padding: 10};

    return (<div style={STYLE}>
        {(props.sort ? props.movies.sort(props.sort) : props.movies).map((movie: MovieRes, index:number) => (<Card key={index} {...movie}/>))}
    </div>);
}