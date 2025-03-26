import {CSSProperties} from "react";
import {Container} from "@mui/material";

export default function ContentBox(props: any) {
    const STYLE: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        backgroundColor: "#dff4",
        padding: "10px",
        borderRadius: 5,
        marginTop: "30px",
        textShadow: "2px 2px 5px #000",
    };

    return (<Container maxWidth="md" sx={STYLE}>{props.children}</Container>);
}