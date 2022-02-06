import React from 'react';
import styled from 'styled-components';
import { theme } from '@utils';

const StyledH1 = styled.h1`
    font-size: ${theme.typography.h1.fontSize};
    line-height: ${theme.typography.h1.lineHeight};
    font-weight: ${theme.typography.h1.fontWeight};
    margin: 24px 0 8px;
`;

const StyledH2 = styled.h2`
    font-size: ${theme.typography.h2.fontSize};
    line-height: ${theme.typography.h2.lineHeight};
    font-weight: ${theme.typography.h2.fontWeight};
    margin: 0 0 16px;
`;

const ManualHeader = () => {
    return (
        <>
            <StyledH1>Sklepikarz</StyledH1>
            <StyledH2>Instrukcja gry</StyledH2>
        </>
    );
};

export default ManualHeader;
