import { ThemeProvider } from '@mui/material';
import React from 'react';
import { PropsWithChildren } from 'react';
import { theme } from './theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export function ThemeWrapper({ children }: PropsWithChildren<unknown>) {
    return (
        <StyledThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledThemeProvider>
    );
}
