import {useEffect, useState} from 'react';
import Table from "./components/Table.jsx";
import axios from "axios";

export default function App() {
    const SWAPI_ENDPOINT = 'https://swapi.dev/api/people';
    const [rows, setRows] = useState(null);
    const [displaying, setDisplaying] = useState(false);
    const STYLE = {
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100vw', height: '100vh', background: ' #111f url("src/assets/starWarsBackground.jpg") no-repeat fixed center top'
    };

    useEffect(() => {
        axios.get(SWAPI_ENDPOINT).then(res => {
            setRows(res.data.results);
        }).catch(err => {
            console.error(`Error retrieving data from SWAPI: ${err}`);
        });
    }, [displaying]);

    return (<div style={STYLE}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}><h1>SWAPI</h1><h2>Star Wars API</h2>
            <div>
                <button onClick={() => setDisplaying(true)}>Submit</button>
                <button onClick={() => setDisplaying(false)}>Reset</button>
            </div>
        </div>
        {displaying ? <Table data={rows}/> : null}
    </div>);
}
