import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { theme } from '@utils';

const StyledDiv = styled.div`
    font-size: 48px;
    color: ${theme.palette.primary.dark};
    background-color: ${theme.palette.background.default};
    text-align: center;
`;

function HiddenCustomer() {
    return <StyledDiv>?</StyledDiv>;
}

export default HiddenCustomer;
