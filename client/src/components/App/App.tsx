import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GameView, Homepage } from '@pages';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@utils';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { AuthenticatedRoute, Header, SnackbarProvider } from '@components';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <SnackbarProvider />
                    <Header />
                    <Router>
                        <Switch>
                            <AuthenticatedRoute path="/game">
                                <GameView />
                            </AuthenticatedRoute>
                            <Route path="/">
                                <Homepage />
                            </Route>
                        </Switch>
                    </Router>
                </ThemeProvider>
            </Provider>
        </>
    );
};

export default App;
