import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        customColor: {
            main: string;
            contrastText: string;
        };
    }
    interface PaletteOptions {
        customColor: {
            main: string;
            contrastText: string;
        };
    }
}

export type ColorKeys =
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'success'
    | 'info'
    | 'customColor';

export const theme = createTheme({
    palette: {
        background: {
            default: '#ddd',
        },
        primary: {
            main: '#317302', // green
            contrastText: '#FFF',
        },
        secondary: {
            main: '#F25C05', // orange
            contrastText: '#FFF',
        },
        error: {
            main: '#D90404', // red
            contrastText: '#FFF',
        },
        warning: {
            main: '#F2B705', //gold
            contrastText: '#000',
        },
        success: {
            main: '#74BF04', // olive
            contrastText: '#000',
        },
        info: {
            main: '#2196F3', // light blue
            contrastText: '#FFF',
        },
        customColor: {
            main: '#F2B705', // customColor
            contrastText: '#000',
        },
    },
});

export const getColor = (key: ColorKeys): string => theme.palette[key].main;
export const getTextColor = (key: ColorKeys): string =>
    theme.palette[key].contrastText || '#000';
