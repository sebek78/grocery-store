import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { theme } from '@utils';

const StyledDiv = styled.div<{ isHidden: boolean | undefined }>`
    border: 2px solid ${theme.palette.primary.dark};
    border-radius: 16px;
    padding: 8px 16px 8px;
    margin: 16px;
    background-color: ${({ isHidden }) =>
        isHidden
            ? theme.palette.background.default
            : theme.palette.background.paper};
`;

function CustomerCard({
    children,
    isHidden,
}: PropsWithChildren<{ isHidden: boolean | undefined }>) {
    return <StyledDiv isHidden={isHidden}>{children}</StyledDiv>;
}

export default CustomerCard;
