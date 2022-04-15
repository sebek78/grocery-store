import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { GameView, HomepageView } from '@pages';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@utils';
import { store } from '@store';
import { Provider } from 'react-redux';
import { AuthenticatedRoute } from '@components';
import { Header } from '@features';
import { createBrowserHistory } from 'history';
import SnackbarProvider from '../../providers/SnackbarProvider';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const history = createBrowserHistory();

const App = () => {
    return (
        <Provider store={store}>
            <StyledThemeProvider theme={theme}>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <SnackbarProvider />
                    <Router history={history}>
                        <Header />

                        <Switch>
                            <AuthenticatedRoute path="/game">
                                <GameView />
                            </AuthenticatedRoute>
                            <Route path="/">
                                <HomepageView />
                            </Route>
                        </Switch>
                    </Router>
                </ThemeProvider>
            </StyledThemeProvider>
        </Provider>
    );
};

export default App;
