import {Button} from "@mui/material";
import NavBar from "./components/NavBar.tsx";
import {useState} from "react";
import {PAGES} from "./types.ts";

export default function App() {
    const [page, setPage] = useState<PAGES>(PAGES.INDEX);
    const [searchText, setSearchText] = useState("");

    return (
        <>
            <NavBar links={[{text: "Home", clicked: () => setPage(PAGES.INDEX)}, {text: "Now Playing", clicked: () => setPage(PAGES.NOW_PLAYING)}]} search={(str:string)=>setSearchText(str)}/>
            <div style={{flexGrow: 1, width: '100%'}}>
                <Button variant="outlined" color="primary" onClick={() => setPage(page + 1)}>MUI Button</Button>
                {displayPage(page)}{searchText}
            </div>
            <NavBar><p style={{width:'50%'}}><span className="inline"><b>TMDB</b></span> API display created as an assignment within Advanced Web Programming. Not for commercial use.</p></NavBar>
        </>
    );
}

function displayPage(page: PAGES) {
    let val: string;
    switch (page) {
        case PAGES.INDEX:
            val = 'index';
            break;
        case PAGES.RESULTS:
            val = 'results';
            break;
        case PAGES.NOW_PLAYING:
            val = 'now playing';
            break;
        case PAGES.ERROR:
        default:
            val = 'error';
            break;
    }
    return (<>{val}</>);
}