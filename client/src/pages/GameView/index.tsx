import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { useContentAreaStyles } from '@constants';
import { Menu } from '@components';
import { gameViewMenuLinks } from './constants';
import { Account, Game, Manual, NewGameForm } from '@pages';

const GameView = () => {
    const classes = useContentAreaStyles();

    return (
        <>
            <Box className={classes.contentArea}>
                <Switch>
                    <Route path="/game/account">
                        <Account />
                    </Route>
                    <Route path="/game/manual">
                        <Manual />
                    </Route>
                    <Route path="/game/new">
                        <NewGameForm />
                    </Route>
                    <Route path="/game">
                        <Game />
                    </Route>
                </Switch>
            </Box>
            <Menu links={gameViewMenuLinks} />
        </>
    );
};

export default GameView;
