import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#adcf"
        },
        secondary: {
            main: "#17df"
        },
        error: {
            main: "#f50f"
        },
        warning: {
            main: "#ed1f"
        },
        info: {
            main: "#0ebf"
        },
        success: {
            main: "#b4d455ff",
            light: "#c3dc77ff",
            dark: "#793f",
            contrastText: "#0001"
        },
    }
});