import { IconButton, ListItemText } from '@mui/material';
import { PlayArrow, NotInterested } from '@mui/icons-material';
import React, { SyntheticEvent } from 'react';
import { Game } from '@sharedTypes';

interface ContinueGameButtonProps {
    game: Game;
    handlePlay: (e: SyntheticEvent, gameId: number) => void;
}

const ContinueGameButton = ({ game, handlePlay }: ContinueGameButtonProps) => (
    <IconButton
        color="primary"
        size="large"
        disabled={game.turn === 7}
        onClick={(e) => handlePlay(e, game.gameId)}
        sx={{ marginRight: 4 }}
        edge="end"
    >
        {game.turn !== 7 ? (
            <>
                <ListItemText primary={'Kontynuuj'} />
                <PlayArrow />
            </>
        ) : (
            <NotInterested />
        )}
    </IconButton>
);

export default ContinueGameButton;
