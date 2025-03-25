import {buildImgRef, SIZE_185, SIZE_342, useWindowDimensions} from "../helpers.ts";
import {CSSProperties, useEffect, useState} from "react";

export default function Card(props: any) {
    const {width} = useWindowDimensions();
    const [minified, setMinified] = useState(width < 1600);
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
        marginBottom: 5
    };

    useEffect(() => {
        setMinified(width < 1600);
    }, [width]);

    return (
        <div style={STYLE}>
            <img src={buildImgRef(props.data.poster_path, minified)} style={{width: minified ? SIZE_185 : SIZE_342}}/>
            <h4 style={CONSTRAINED}>{props.data.title}</h4>
            <p style={CONSTRAINED}>{props.data.overview}</p>
            <p style={CONSTRAINED}>{props.data.vote_average} / 10 ({props.data.vote_count}) {width}</p>
        </div>
    );
}