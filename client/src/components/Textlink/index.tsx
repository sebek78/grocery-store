import { useTheme } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const StyledA = styled.a`
    font-size: ${(props) => props.theme.typography.body1.fontSize};
    line-height: ${(props) => props.theme.typography.body1.lineHeight};
    font-weight: bold;
    color: ${(props) => props.theme.palette.primary.main};
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
    }
    &:hover {
        text-decoration: underline;
    }
`;

interface TextLinkProps {
    href: string;
    label: string;
}

const TextLink = ({ href, label }: TextLinkProps) => {
    const theme = useTheme();
    return (
        <StyledA href={href} theme={theme}>
            {label}
        </StyledA>
    );
};

export default TextLink;
