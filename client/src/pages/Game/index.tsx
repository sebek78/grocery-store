import React, { useEffect } from 'react';
import { ColorButton, Loader, StyledLink } from '@components';
import { getGamesList } from '@gameSlice';
import { useAppDispatch, useAppSelector } from '@store';
import { Divider, List } from '@mui/material';
import { Game } from '@sharedTypes';
import GameRow from './components/GamesList';

const generate = (
    games: Game[],
    onClick: Function,
    secondaryAction: Function
) =>
    games.map((game) =>
        React.cloneElement(
            <GameRow
                game={game}
                onClick={onClick}
                secondaryAction={secondaryAction}
            />,
            {
                key: game.gameId,
            }
        )
    );

const Game = () => {
    const dispatch = useAppDispatch();
    const games = useAppSelector(({ game }) => game.games);
    const isGettingGames = useAppSelector(({ game }) => game.isGettingGames);

    useEffect(() => {
        dispatch(getGamesList());
    }, []);

    const handlePlay = (id: number) => {
        console.log('Play', id);
    };

    const handleDelete = (id: number) => {
        console.log('Delete', id);
    };

    return (
        <>
            <StyledLink to="/game/new">
                <ColorButton btnColor="primary">Nowa gra</ColorButton>
            </StyledLink>
            <Divider />
            {isGettingGames && <Loader color="info" />}
            {!isGettingGames && (
                <List dense={true}>
                    {generate(games, handlePlay, handleDelete)}
                </List>
            )}
        </>
    );
};

export default Game;
