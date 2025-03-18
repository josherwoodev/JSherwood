import {AppBar, Box, Toolbar} from "@mui/material";

export default function NavBar(props:any) {
    return (<Box sx={{ flexGrow: 0, width:1, height:1/2 }}>
        <AppBar position="sticky"><Toolbar>{props.children}</Toolbar></AppBar>
    </Box>);
}