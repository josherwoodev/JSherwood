import {Button} from "@mui/material";
import NavBar from "./components/NavBar.tsx";
import {useState} from "react";
import {PAGES} from "./types.ts";

export default function App() {
    const [page, setPage] = useState<PAGES>(PAGES.INDEX);

    return (
        <>
            <NavBar></NavBar>
            <div style={{flexGrow:1, width:'100%'}}>
                <p>{import.meta.env.VITE_TMDB_API_TOKEN}</p>
                <Button variant="outlined" color="primary" onClick={() => setPage(page + 1)}>MUI Button</Button>
                {getPage(page)}
            </div>
            <NavBar><h3>Test</h3></NavBar>
        </>
    );
}

function getPage(page: PAGES) {
    let val: string;
    switch (page) {
        case PAGES.INDEX:
            val = 'index';
            break;
        case PAGES.RESULTS:
            val = 'results';
            break;
        case PAGES.ERROR:
        default:
            val = 'error';
            break;
    }
    return (<>{val}</>);
}