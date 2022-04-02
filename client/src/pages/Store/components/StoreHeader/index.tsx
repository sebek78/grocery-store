import { Game } from '@sharedTypes';
import React from 'react';
import styled from 'styled-components';
import { theme } from '@utils';
import { Grid } from '@mui/material';
import StoreMenu from '../StoreMenu';

interface StoreHeaderProps {
    game?: Game;
}

const StoreName = styled.div`
    font-size: ${theme.typography.h2.fontSize};
    font-weight: bold;
    margin-right: 16px;
`;
export const StoreLabel = styled.div`
    font-size: ${theme.typography.h3.fontSize};
    margin-right: 16px;
    text-align: center;
    color: ${(props) =>
        props.color ? props.color : theme.palette.text.primary};
`;

const phaseName = [
    'Planowanie',
    'Dostawa',
    'Magazynowanie',
    'Sprzedaż',
    'Sprzątanie',
    'Podsumowanie',
];

function StoreHeader({ game }: StoreHeaderProps) {
    return (
        <Grid container justifyContent="center" alignItems="center" wrap="wrap">
            <StoreName>Sklep: {game?.storeName}</StoreName>
            <StoreLabel>Kasa: {game?.cash}</StoreLabel>
            <StoreLabel>
                Dzień:{game?.turn}/6 {phaseName[game?.phase ?? 5]}
            </StoreLabel>
            <StoreMenu phase={game?.phase ?? 5} />
        </Grid>
    );
}

export default StoreHeader;
