import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CloseIconButton from './index';

describe('CloseIconButton component', () => {
    it('should match to snapshot', () => {
        const handleClose = jest.fn();
        render(<CloseIconButton handleClose={handleClose} />);

        expect(screen.getByRole('button')).toMatchInlineSnapshot(`
            <button
              class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium sc-bdnxRM eCVxfu css-1kuq5xv-MuiButtonBase-root-MuiIconButton-root"
              tabindex="0"
              type="button"
            >
              <svg
                aria-hidden="true"
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root"
                data-testid="CloseRoundedIcon"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                />
              </svg>
              <span
                class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
              />
            </button>
        `);
    });
    it('should handle user click', () => {
        const handleClose = jest.fn();
        render(<CloseIconButton handleClose={handleClose} />);

        userEvent.click(screen.getByRole('button'));
        expect(handleClose).toHaveBeenCalledWith('login');
        expect(handleClose).toBeCalledTimes(1);
    });
});
