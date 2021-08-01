import React from 'react';
import { Homepage } from '@pages';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@utils';

const App = () => {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme} >
                <Homepage />
            </ThemeProvider>
        </>
    );
};

export default App;
