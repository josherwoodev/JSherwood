import {useParams} from "react-router-dom";

export default function Results() {
    const {searchTerm} = useParams();
    return (<>Searched: {searchTerm}</>);
}