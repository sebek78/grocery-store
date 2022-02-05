import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    font-size: 16px;
    line-height: 20px;
    margin: 8px 0;
    font-weight: 400;
    text-align: left;
    width: 100%;
    outline: '1px dashed red';
    @media (min-width: 600px) {
        text-align: justify;
    }
`;

const ManualParagraph: React.FC = ({ children }) => {
    return <StyledP>{children}</StyledP>;
};

export default ManualParagraph;
