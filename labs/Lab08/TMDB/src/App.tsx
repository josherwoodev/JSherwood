import {Button} from "@mui/material";

export default function App() {

    return (
        <>
            <div>
                <p>{import.meta.env.VITE_TMDB_API_TOKEN}</p>
                <Button variant="outlined" color="primary">MUI Button</Button>
            </div>
        </>
    );
}