import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GameView, Homepage } from '@pages';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@utils';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { AuthenticatedRoute, Header } from '@components';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <CssBaseline />
                <ThemeProvider theme={theme}>
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
