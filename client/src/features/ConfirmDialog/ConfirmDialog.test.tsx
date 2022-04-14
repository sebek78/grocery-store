import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ConfirmDialog, { ConfirmDialogProps } from './index';
import { ThemeWrapper } from '@utils';

// TODO: use ThemeWrapper, needs components refactoring
jest.mock('@utils', () => ({
    api: jest.fn(),
    theme: {
        breakpoints: {
            up(key: string): string {
                return '1200';
            },
        },
    },
}));

const mockDispatch = jest.fn();
const mockOpenConfirnDialog = jest.fn();

jest.mock('@store', () => ({
    useAppDispatch: () => mockDispatch,
}));
jest.mock('@viewsSlice', () => ({
    openConfirmDialog: (value: boolean) => mockOpenConfirnDialog(value),
}));

describe('ConfirmDialog component', () => {
    const mockConfirmAction = jest.fn();
    const props: ConfirmDialogProps = {
        open: true,
        title: 'Test title',
        text: 'Some test text',
        actionName: 'Action',
        severity: 'error',
        action: mockConfirmAction,
    };

    it('should be open, have text and correct buttons', () => {
        render(<ConfirmDialog {...props} />, {
            wrapper: ThemeWrapper,
        });

        const title = document.querySelector('h2');
        expect(title?.textContent).toBe(props.title);

        const [cancelButton, confirmButton] =
            document.querySelectorAll('button');
        expect(cancelButton.textContent).toBe('Anuluj');
        expect(confirmButton.textContent).toBe(props.actionName);
    });

    it('should be closed when open=false', () => {
        render(<ConfirmDialog {...props} open={false} />, {
            wrapper: ThemeWrapper,
        });

        const title = document.querySelector('h2');
        expect(title).toBe(null);
    });

    it('should be closed after cancel button click', () => {
        render(<ConfirmDialog {...props} />, {
            wrapper: ThemeWrapper,
        });

        const title = document.querySelector('h2');
        expect(title?.textContent).toBe(props.title);

        const [cancelButton] = document.querySelectorAll('button');
        userEvent.click(cancelButton);
        expect(mockDispatch).toBeCalledTimes(1);
        expect(mockOpenConfirnDialog).toHaveBeenCalledWith(false);
    });

    it('should be run action after confirm button click', () => {
        render(<ConfirmDialog {...props} />, {
            wrapper: ThemeWrapper,
        });

        const [, confirmButton] = document.querySelectorAll('button');
        userEvent.click(confirmButton);
        expect(mockConfirmAction).toBeCalledTimes(1);
    });
});
