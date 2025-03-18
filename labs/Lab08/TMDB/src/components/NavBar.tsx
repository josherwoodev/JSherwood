import {AppBar, Box, Button, Container, Toolbar} from "@mui/material";

export default function NavBar(props: any) {
    return (<Box sx={{flexGrow: 0, width: 1, height: 1 / 2}}>
        <AppBar position="sticky" color="default"><Container maxWidth="md" sx={{display: "flex", flexDirection: "row", placeContent: "start"}}>
            <Toolbar disableGutters>
                {props.links ? props.links.map((link: any, index: number) => (<Button key={index} onClick={link.handler} color="primary">{link.text}</Button>)) : null}
                {props.children}
            </Toolbar>
        </Container></AppBar>
    </Box>);
}