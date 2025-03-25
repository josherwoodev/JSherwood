import {buildImgRef, SIZE_185, SIZE_342, useWindowDimensions} from "../helpers.ts";
import {CSSProperties, useEffect, useState} from "react";

export default function Card(props: any) {
    const LG_THRESHOLD = 1366;
    const NO_IMAGE = "/src/assets/where.png";
    const {width} = useWindowDimensions();
    const [minified, setMinified] = useState(width < LG_THRESHOLD);
    const STYLE: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        placeItems: 'center',
        backgroundColor: "#334",
        padding: 10,
        margin: 10,
        boxShadow: '#aaa 3px 3px 5px'
    };
    const CONSTRAINED: CSSProperties = {
        maxWidth: minified ? SIZE_185 + 20 : SIZE_342,
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'justify'
    };

    useEffect(() => {
        setMinified(width < LG_THRESHOLD);
    }, [width]);

    return (
        <div style={STYLE}>
            <img src={props.poster_path ? buildImgRef(props.poster_path, minified) : NO_IMAGE} style={{width: minified ? SIZE_185 : SIZE_342}} alt={props.poster_path ? props.title : "No image provided."}/>
            <h4 style={CONSTRAINED}>{props.title}</h4>
            <p style={{...CONSTRAINED, flexGrow: 1}}>{props.overview}</p>
            <p style={CONSTRAINED}>{props.vote_average} / 10 ({props.vote_count})</p>
        </div>
    );
}
