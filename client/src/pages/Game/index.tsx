import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ColorButton, Loader, StyledLink } from '@components';
import { getGamesList } from '@gameSlice';
import { useAppDispatch, useAppSelector } from '@store';
import { Divider, List } from '@mui/material';
import { Game } from '@sharedTypes';
import GamesListItem from './components/GamesListItem';
import { Box } from '@mui/system';

const generate = (
    games: Game[],
    onClick: Function,
    secondaryAction: Function
) =>
    games.map((game) =>
        React.cloneElement(
            <GamesListItem
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
    let history = useHistory();
    const games = useAppSelector(({ game }) => game.games);
    const isGettingGames = useAppSelector(({ game }) => game.isGettingGames);

    useEffect(() => {
        dispatch(getGamesList());
    }, []);

    const handlePlay = (gameId: number) => {
        history.push(`/game/${gameId}`);
    };

    const handleDelete = (id: number) => {
        console.log('Delete', id);
    };

    return (
        <>
            <Box sx={{ padding: 1 }}>
                <StyledLink to="/game/new">
                    <ColorButton btnColor="primary">Nowa gra</ColorButton>
                </StyledLink>
            </Box>
            <Divider />
            {isGettingGames && <Loader color="info" />}
            {!isGettingGames && (
                <List dense={true}>
                    {generate(games, handlePlay, handleDelete)}
                </List>
            )}
            {!isGettingGames && games.length === 0 && (
                <Box sx={{ padding: 1 }}>Lista gier jest pusta.</Box>
            )}
        </>
    );
};

export default Game;
