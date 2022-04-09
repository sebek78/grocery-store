import React from 'react';
import { List } from '@mui/material';
import { Game } from 'src/sharedTypes';
import GamesListItem from './components/GameListItem';

interface GamesListProps {
    games: Game[];
    handlePlay: (gameId: number) => void;
    handleClickDeleteIcon: (id: number) => void;
}

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

const GamesList = ({
    games,
    handlePlay,
    handleClickDeleteIcon,
}: GamesListProps) => {
    return (
        <List dense={true} sx={{ maxWidth: 600, mx: 'auto' }}>
            {generate(games, handlePlay, handleClickDeleteIcon)}
        </List>
    );
};

export default GamesList;
