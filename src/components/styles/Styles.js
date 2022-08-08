import { createTheme } from '@mui/material';

const Colors = {
    // PRIMARY COLORS
    primary_main: '#2B4865',
    primary_light: '#9be7ff',
    primary_dark: '#2286c3',
    secondary_main: '#8FE3CF',
    secondary_light: '#7c43bd',
    secondary_dark: '#12005e',
    // STATUS COLORS
    success: '#b2ff59',
    info: '#e1f5fe',
    danger: '#ef5350',
    warning: '#b61827',
    muted: '',
    border: '',
    inverse: '',
    shaft: '',
    dove_gray: '#888888',
    body_bg: '#efebe9',
    // SOLID COLORS
    white: '#fff',
    black: '#000',
};

const theme = createTheme({
    palette: {
        background: {
            default: Colors.body_bg,
        },
        primary: {
            light: Colors.primary_light,
            main: Colors.primary_main,
            dark: Colors.primary_dark,
            contrastText: '#ffffff'
        },
        secondary: {
            light: Colors.secondary_light,
            main: Colors.secondary_main,
            dark: Colors.secondary_dark,
            contrastText: '#ffffff'
        },
        solids: {
            white: Colors.white,
            black: Colors.black,
        },
        display: {
            success: Colors.success,
            info: Colors.info,
            danger: Colors.danger,
            warning: Colors.warning,
            muted: Colors.muted,
            border: Colors.border,
            inverse: Colors.inverse,
            shaft: Colors.shaft,
            dove_gray: Colors.dove_gray,
            body_bg: Colors.body_bg,
        },
        Typography: {
            fontFamily: [
                'Josefin Sans',
                'Oleo Script Swash Caps',
                'cursive',
                'sans-serif'
            ].join(','),

        },
        Paper: {
            marginTop: '200px',
        }

    }
});

export default theme;