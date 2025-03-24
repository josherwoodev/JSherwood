import {Button} from "@mui/material";
import NavBar from "./NavBar.tsx";
import {Outlet} from "react-router-dom";
import {ThemeProvider} from "@emotion/react";
import {theme} from "./ui/Theme.tsx";

export default function Layout() {

    return (
        <ThemeProvider theme={theme}>
            <NavBar links={[{text: "Home", href: "/"}, {text: "Now Playing", href: "/now-playing"}]} search/>
            <div style={{flexGrow: 1, width: '100%', overflowY: 'scroll'}}>
                <Button variant="outlined" color="primary">MUI Button</Button>
                <Outlet/>
            </div>
            <NavBar><p style={{width: '50%'}}><span className="inline"><b>TMDB</b></span> API display created as an assignment within Advanced Web Programming. Not for commercial use.</p></NavBar>
        </ThemeProvider>
    );
}