import React, { useEffect } from 'react';
import { ColorButton, StyledLink } from '@components';
import { getGamesList } from '@gameSlice';
import { useAppDispatch, useAppSelector } from '@store';

const Game = () => {
    const dispatch = useAppDispatch();
    const games = useAppSelector(({ game }) => game.games);

    useEffect(() => {
        dispatch(getGamesList());
    }, []);

    console.log(games);
    // TODO: game list, loader,

    return (
        <>
            <StyledLink to="/game/new">
                <ColorButton btnColor="primary">Nowa gra</ColorButton>
            </StyledLink>
        </>
    );
};

export default Game;
