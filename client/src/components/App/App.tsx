import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage } from '@pages';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@utils';

const App = () => {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route path="/">
                            <Homepage />
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
};

export default App;
