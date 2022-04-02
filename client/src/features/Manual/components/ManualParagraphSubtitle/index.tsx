import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { theme } from '@utils';

const StyledH4 = styled.h4`
    font-size: ${theme.typography.h4.fontSize};
    line-height: ${theme.typography.h4.lineHeight};
    font-weight: ${theme.typography.h4.fontWeight};
    margin: 16px 0 8px;
    text-align: left;
    width: 100%;
`;

const ManualParagraphSubtitle = ({ children }: PropsWithChildren<unknown>) => {
    return <StyledH4>{children}</StyledH4>;
};

export default ManualParagraphSubtitle;
