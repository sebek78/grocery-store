import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { theme } from '@utils';

const StyledH3 = styled.span`
    font-size: ${theme.typography.body1.fontSize};
    line-height: ${theme.typography.body1.lineHeight};
    font-weight: bold;
`;

const ManualDefinition = ({ children }: PropsWithChildren<unknown>) => {
    return <StyledH3>{` ${children} `}</StyledH3>;
};

export default ManualDefinition;
