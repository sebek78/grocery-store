import React, { SyntheticEvent } from 'react';
import { useAppSelector } from '@store';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Game } from '@sharedTypes';
import { DeleteButton, Loader } from '@components';
import ContinueGameButton from '../ContinueGameButton';

interface GamesListItemProps {
    game: Game;
    onClick: (gameId: number) => void;
    secondaryAction: (id: number) => void;
}

const GamesListItem: React.FC<GamesListItemProps> = ({
    game,
    onClick,
    secondaryAction,
}) => {
    const deletingGameId = useAppSelector(({ game }) => game.deletingGameId);

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
                        <ContinueGameButton
                            game={game}
                            handlePlay={handlePlay}
                        />
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
                        deletingGameId === game.gameId ? (
                            <Loader color="error" />
                        ) : (
                            <DeleteButton
                                action={secondaryAction}
                                actionId={game.gameId}
                            />
                        )
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
