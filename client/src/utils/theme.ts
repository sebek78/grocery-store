import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        customColor: SimplePaletteColorOptions;
    }
    interface PaletteOptions {
        customColor: SimplePaletteColorOptions;
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
            main: '#74BF04', // olive
            contrastText: '#000',
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
