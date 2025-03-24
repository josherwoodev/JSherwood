import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Landing from "./components/Landing.tsx";
import NowPlaying from "./components/NowPlaying.tsx";
import Results from "./components/Results.tsx";
import Error from "./components/Error.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path="now-playing" element={<NowPlaying />} />
                    <Route path="search/:searchTerm" element={<Results />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}