import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ColorButton, ConfirmDialog, Loader, StyledLink } from '@components';
import { getGamesList } from '@gameSlice';
import { openConfirmDialog } from '@viewsSlice';
import { useAppDispatch, useAppSelector } from '@store';
import { Divider, List } from '@mui/material';
import { Game } from '@sharedTypes';
import GamesListItem from './components/GamesListItem';
import { Box } from '@mui/system';

const generate = (
    games: Game[],
    onClick: (gameId: number) => void,
    secondaryAction: (id: number) => void
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
    const gameListError = useAppSelector(({ game }) => game.gameListError);
    const isOpenDeleteDialog = useAppSelector(
        ({ views }) => views.confirmDialog.open
    );
    const [gameIDtoDelete, setGameIdToDelete] = useState(-1);

    useEffect(() => {
        dispatch(getGamesList());
    }, []);

    const handlePlay = (gameId: number) => {
        history.push(`/game/${gameId}`);
    };

    const handleClickDelete = (id: number) => {
        setGameIdToDelete(id);
        dispatch(openConfirmDialog(true));
    };

    const deleteGame = () => {
        console.log('Delete', gameIDtoDelete);
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
                    {generate(games, handlePlay, handleClickDelete)}
                </List>
            )}
            {!isGettingGames && games.length === 0 && (
                <Box sx={{ padding: 1 }}>
                    {gameListError ? gameListError : 'Lista gier jest pusta.'}
                </Box>
            )}
            <ConfirmDialog
                open={isOpenDeleteDialog}
                title="Usunięcie gry"
                text="Potwierdź usunięcie gry."
                actionName="Usuń"
                severity="error"
                action={deleteGame}
            />
        </>
    );
};

export default Game;
