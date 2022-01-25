import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ColorButton, Loader, StyledLink } from '@components';
import { getGamesList, deleteGame } from '@gameSlice';
import { openConfirmDialog } from '@viewsSlice';
import { useAppDispatch, useAppSelector } from '@store';
import { Divider, List } from '@mui/material';
import { Box } from '@mui/system';
import { ConfirmDialog, GamesList } from '@features';

const Games = () => {
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

    const handleClickDeleteIcon = (id: number) => {
        setGameIdToDelete(id);
        dispatch(openConfirmDialog(true));
    };

    const handleDeleteGame = () => {
        dispatch(openConfirmDialog(false));
        dispatch(deleteGame(gameIDtoDelete));
        setGameIdToDelete(-1);
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
                <GamesList
                    games={games}
                    handlePlay={handlePlay}
                    handleClickDeleteIcon={handleClickDeleteIcon}
                />
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
                action={handleDeleteGame}
            />
        </>
    );
};

export default Games;
