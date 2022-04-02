import { theme } from '@utils';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 8px 8px 0;
    ${theme.breakpoints.up('sm')} {
        margin: 16px 16px 0;
    }
    ${theme.breakpoints.up('md')} {
        margin: 24px 24px 0;
    }
`;

const StoreLayout = ({ children }: PropsWithChildren<{}>) => (
    <StyledDiv>{children}</StyledDiv>
);

export default StoreLayout;
