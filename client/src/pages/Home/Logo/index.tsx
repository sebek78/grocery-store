import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { theme } from '@utils';

const LogoBackground = styled(Grid)`
    background-color: ${theme.palette.success.main};
    width: 220px;
    height: 80px;
`;

const InnerLogo = styled.div`
    background-color: ${theme.palette.error.main};
    padding: 4px 8px;
    width: 220px;
    border-radius: 8px;
    color: ${theme.palette.error.contrastText};
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
`;

const LogoText = styled.div`
    font-size: 24px;
    line-height: 24px;
    padding-top: 5px;
    color: ${theme.palette.success.contrastText};
`;

const Logo = () => {
    return (
        <LogoBackground
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
        >
            <InnerLogo>Skelpikarz</InnerLogo>
            <LogoText>Gra edukacyjna</LogoText>
        </LogoBackground>
    );
};

export default Logo;
