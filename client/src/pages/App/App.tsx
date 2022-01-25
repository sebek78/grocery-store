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

export const history = createBrowserHistory();

const App = () => {
    return (
        <>
            <Provider store={store}>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <SnackbarProvider />
                    <Header />
                    <Router history={history}>
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
            </Provider>
        </>
    );
};

export default App;
