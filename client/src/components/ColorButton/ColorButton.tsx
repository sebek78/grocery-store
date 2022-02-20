import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { ColorKeys, getColor, getTextColor, theme } from '@utils';

const ColorButton = styled(({ btnColor, ...rest }) => (
    <Button variant="contained" {...rest} />
))<{
    btnColor: ColorKeys;
}>`
    &.MuiButton-contained {
        background-color: ${(props) => getColor(props.btnColor)};
        color: ${(props) => getTextColor(props.btnColor)};
        margin: ${theme.spacing(1)}px;
        &:hover {
            background-color: ${(props) => getColor(props.btnColor)};
            opacity: 0.7;
        }
    }
`;

export default ColorButton;
