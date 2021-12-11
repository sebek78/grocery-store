import { getGameDataRequest } from '@gameSlice';
import { useAppDispatch, useAppSelector } from '@store';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const Store = () => {
    let { gameId: gameIdParam } = useParams<{ gameId: string }>();
    let gameId = Number.parseInt(gameIdParam, 10);
    const dispatch = useAppDispatch();
    const store = useAppSelector(({ game }) =>
        game.stores.find((store) => store.gameId === gameId)
    );
    const gameDataError = useAppSelector(({ game }) => game.gameDataError);

    useEffect(() => {
        if (!store) {
            dispatch(getGameDataRequest(gameId));
        } else {
            console.log(store);
        }
    }, [store]);

    return <div>{gameDataError ? gameDataError : `Store ${gameId}`}</div>;
};

export default Store;
