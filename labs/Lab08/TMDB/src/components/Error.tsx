import {Container} from "@mui/material";
import {CSSProperties} from "react";

export default function Error(props: any) {
    const STYLE:CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        backgroundColor: "#dff4",
        padding: "10px",
        borderRadius: 5,
        marginTop: "30px",
        textShadow: "2px 2px 5px #000",
    }

    return (<Container maxWidth="md" sx={STYLE}>
        {props.children
            ? props.children
            : <>
                <h2>404'd!!</h2>
                <p>The page you're looking for doesn't seem to exist or is otherwise unreachable.</p>
            </>
        }</Container>);
}