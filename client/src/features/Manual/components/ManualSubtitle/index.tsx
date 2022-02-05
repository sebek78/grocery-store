import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
    font-size: 20px;
    line-height: 25px;
    margin: 16px 0 8px;
    font-weight: bold;
    text-align: left;
    width: 100%;
`;

const ManualSubtitle: React.FC = ({ children }) => {
    return <StyledH3>{children}</StyledH3>;
};

export default ManualSubtitle;
