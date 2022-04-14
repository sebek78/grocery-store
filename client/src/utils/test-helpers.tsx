import { ThemeProvider } from '@mui/material';
import React from 'react';
import { PropsWithChildren } from 'react';
import { theme } from './theme';

export function ThemeWrapper({ children }: PropsWithChildren<unknown>) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
