import React from 'react';
import styled from 'styled-components';
import { theme } from '@utils';

const StyledH3 = styled.h3`
    font-size: ${theme.typography.h3.fontSize};
    line-height: ${theme.typography.h3.lineHeight};
    font-weight: ${theme.typography.h3.fontWeight};
    margin: 16px 0 8px;
    text-align: left;
    width: 100%;
`;

const ManualSubtitle: React.FC = ({ children }) => {
    return <StyledH3>{children}</StyledH3>;
};

export default ManualSubtitle;
