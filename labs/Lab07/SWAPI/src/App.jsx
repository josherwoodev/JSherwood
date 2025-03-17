import {useEffect, useState} from 'react';
import Table from "./components/Table.jsx";

export default function App() {
    const [rows, setRows] = useState([]);
    const [displaying, setDisplaying] = useState(false);
    const STYLE = {
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100vw', height: '100vh', background: 'url("./assets/outerSpaceWars.jpg") no-repeat center bottom fixed'
    };

    useEffect(() => {
        setRows([{name: 'Joe', height: '5\'8"', hair_color: 'black', gender: 'male'}]);
    }, [displaying]);

    return (<div style={STYLE}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}><h1>SWAPI</h1><h2>Star Wars API</h2>
                <div>
                    <button>Submit</button>
                    <button onClick={() => {
                        setDisplaying(!displaying);
                    }}>Reset
                    </button>
                </div>
            </div>
            {displaying ? <Table data={rows}/> : null}
        </div>);
}