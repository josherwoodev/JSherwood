import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#adc"
        },
        secondary: {
            main: "#17d"
        },
        error: {
            main: "#f50"
        },
        warning: {
            main: "#ed1"
        },
        info: {
            main: "#0eb"
        },
        success: {
            main: "#b4d455ff",
            light: "#c3dc77ff",
            dark: "#793",
            contrastText: "#0001"
        },
    }
});