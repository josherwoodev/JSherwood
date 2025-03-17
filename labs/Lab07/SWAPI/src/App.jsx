import {useEffect, useState} from 'react';
import Table from "./components/Table.jsx";

export default function App() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows([{name:'Joe',height:'5\'8"',hair_color:'black',gender:'male'}]);
    }, []);

    return (<Table data={rows} />);
}