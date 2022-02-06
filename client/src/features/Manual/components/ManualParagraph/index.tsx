import React from 'react';
import styled from 'styled-components';
import { theme } from '@utils';

const StyledP = styled.p`
    font-size: ${theme.typography.body1.fontSize};
    line-height: ${theme.typography.body1.lineHeight};
    font-weight: ${theme.typography.body1.fontWeight};
    margin: 8px 0;
    text-align: left;
    width: 100%;
    @media (min-width: 600px) {
        text-align: justify;
    }
`;

const ManualParagraph: React.FC = ({ children }) => {
    return <StyledP>{children}</StyledP>;
};

export default ManualParagraph;
