import React from 'react';
import styled from 'styled-components';
import { theme } from '@utils';

const StyledA = styled.a`
    font-size: ${theme.typography.body1.fontSize};
    line-height: ${theme.typography.body1.lineHeight};
    font-weight: bold;
    color: ${theme.palette.primary.main};
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

const TextLink = ({ href, label }: TextLinkProps) => (
    <StyledA href={href}>{label}</StyledA>
);

export default TextLink;
