import {AppBar, Button, Container, InputAdornment, TextField, Toolbar} from "@mui/material";
import {Search} from "@mui/icons-material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function NavBar(props: any) {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const A_STYLE = {fontSize: 0, lineHeight: "normal", cursor: "pointer"};
    return (
        <AppBar position="sticky" color="primary"><Container maxWidth="lg">
            <Toolbar sx={{display: "flex", flexDirection: "row", placeContent: "start"}} disableGutters>
                {props.links ? props.links.map((link: any, index: number) => (<Button key={index} href={link.href} color="secondary" variant="outlined" style={{margin:5}}>{link.text}</Button>)) : null}
                <div style={{flexGrow: 1}}>{props.children}</div>
                {props.search
                    ? <form action="#" onSubmit={e => {
                        e.preventDefault();
                        navigate("/search/" + searchText)
                    }}>
                        <TextField color="secondary" label="Search ..." value={searchText} onChange={(e) => setSearchText(e.target.value)} variant="outlined" size="small" slotProps={{
                            input: {
                                endAdornment: (<InputAdornment position="end"><a style={A_STYLE} onClick={() => navigate("/search/" + searchText)}>
                                    <Search/></a></InputAdornment>)
                            }
                        }}/>
                    </form>
                    : null}
            </Toolbar>
        </Container></AppBar>
    );
}