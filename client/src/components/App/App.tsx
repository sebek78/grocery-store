import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage } from '@pages';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@utils';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import Header from '../Header';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <Header />
                    <Router>
                        <Switch>
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
