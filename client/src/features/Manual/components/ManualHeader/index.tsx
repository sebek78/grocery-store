import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-size: 34px;
    line-height: 42px;
    margin: 24px 0 8px;
`;

const StyledH2 = styled.h2`
    font-size: 26px;
    line-height: 34px;
    margin: 0 0 16px;
    font-weight: 400;
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
