import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { ColorKeys, getColor, getTextColor, theme } from '@utils';

const ColorButton = styled(({ bgColor, ...rest }) => <Button {...rest} />)<{ bgColor: ColorKeys }>`
    &.MuiButton-contained {
        background-color: ${ props => getColor(props.bgColor)};
        color: ${props => getTextColor(props.bgColor)};
        margin: ${theme.spacing(1)}px;
        &:hover {
            opacity: 0.7;
        }
    }
`;

const Homepage = () => {
    return (
        <>
            <h1>Grocery Store</h1>
            <ColorButton variant="contained" bgColor="primary">Primary</ColorButton>
            <ColorButton variant="contained" bgColor="secondary">Secondary</ColorButton>
            <ColorButton variant="contained" bgColor="error">Error</ColorButton>
            <ColorButton variant="contained" bgColor="warning">Warning</ColorButton>
            <ColorButton variant="contained" bgColor="success">Success</ColorButton>
            <ColorButton variant="contained" bgColor="info">Info</ColorButton>
        </>
    );
};

export default Homepage;
