import React from 'react';
import { ColorButton, StyledLink } from '@components';

const Game = () => {
    return (
        <>
            <StyledLink to="/game/new">
                <ColorButton btnColor="primary">Nowa gra</ColorButton>
            </StyledLink>
        </>
    );
};

export default Game;
