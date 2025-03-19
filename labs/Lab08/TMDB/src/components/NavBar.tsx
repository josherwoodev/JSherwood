import {AppBar, Box, Button, Container, InputAdornment, TextField, Toolbar} from "@mui/material";
import {Search} from "@mui/icons-material";
import {useState} from "react";

export default function NavBar(props: any) {
    const [searchText, setSearchText] = useState("");
    const A_STYLE = {fontSize: 0, lineHeight: "normal", cursor: "pointer"};
    return (<Box sx={{flexGrow: 0, width: 1}}>
        <AppBar position="sticky" color="default"><Container maxWidth="lg">
            <Toolbar sx={{display: "flex", flexDirection: "row", placeContent: "start"}} disableGutters>
                {props.links ? props.links.map((link: any, index: number) => (<Button key={index} onClick={link.clicked} color="inherit">{link.text}</Button>)) : null}
                <div style={{flexGrow: 1}}>{props.children}</div>
                {props.search
                    ? <TextField label="Search ..." value={searchText} onChange={(e) => setSearchText(e.target.value)} variant="outlined" size="small" slotProps={{
                        input: {
                            endAdornment: (<InputAdornment position="end"><a style={A_STYLE} onClick={() => props.search(searchText)}>
                                <Search/></a></InputAdornment>)
                        }
                    }}/>
                    : null}
            </Toolbar>
        </Container></AppBar>
    </Box>);
}