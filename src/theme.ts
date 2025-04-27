import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

let theme = createTheme({
    palette: {
        primary: {
        main: "#232323",
        },
        secondary: {
        main: purple[500],
        },
    },
    typography: {
        fontFamily: 'Poppins',
    },
});

theme = responsiveFontSizes(theme);

export default theme;