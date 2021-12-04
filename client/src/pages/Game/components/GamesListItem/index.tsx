import React, { SyntheticEvent } from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';
import {
    Delete,
    ExpandMore,
    PlayArrow,
    NotInterested,
} from '@mui/icons-material';
import { Game } from '@sharedTypes';

interface GamesListItemProps {
    game: Game;
    onClick: Function;
    secondaryAction: Function;
}

const GamesListItem: React.FC<GamesListItemProps> = ({
    game,
    onClick,
    secondaryAction,
}) => {
    const handlePlay = (e: SyntheticEvent, gameId: number) => {
        e.stopPropagation();
        onClick(gameId);
    };

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <ListItem>
                    <ListItemAvatar>
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
                    </ListItemAvatar>

                    <ListItemText
                        primary={game.storeName}
                        secondary={
                            game.isRunning
                                ? `Runda ${game.turn}/6 faza ${game.phase}/5`
                                : 'Zakończona'
                        }
                    />
                </ListItem>
            </AccordionSummary>
            <AccordionDetails>
                <ListItem
                    secondaryAction={
                        <IconButton
                            edge="end"
                            aria-label="delete"
                            color="warning"
                            onClick={() => secondaryAction(game.gameId)}
                        >
                            <Delete />
                        </IconButton>
                    }
                >
                    <ListItemText
                        primary={`Kasa: ${game.cash}`}
                        secondary={`Poziom trudności: ${game.difficulty}`}
                    />
                </ListItem>
            </AccordionDetails>
        </Accordion>
    );
};

export default GamesListItem;
