import NavBar from "./NavBar.tsx";
import {Outlet} from "react-router-dom";
import {ThemeProvider} from "@emotion/react";
import {theme} from "./ui/Theme.tsx";
import bgImage from "../assets/theaterBg.jpg";
import {CSSProperties} from "react";

export default function Layout() {
    const STYLE: CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `#2228 url('${bgImage}') center center no-repeat`,
        backgroundBlendMode: 'darken',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        zIndex: -1
    };
    const LINKS = [
        {text: "Home", href: "/"},
        {text: "Now Playing", href: "/now-playing"}
    ];

    return (
        <ThemeProvider theme={theme}>
            <div style={STYLE}/>
            <NavBar links={LINKS} search/>
            <div style={{flexGrow: 1, width: '100%', overflowY: 'scroll'}}>
                <Outlet/>
            </div>
            <NavBar><p style={{width: '50%'}}>
                <span className="inline"><b>TMDB</b></span> API display created as an assignment within Advanced Web Programming. Not for commercial use.</p>
            </NavBar>
        </ThemeProvider>
    );
}