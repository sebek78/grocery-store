import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ColorButton from './ColorButton';

describe('CloseIconButton component', () => {
    it('should match to snapshot', () => {
        // const handleClick = jest.fn();
        render(<ColorButton />);

        expect(screen.getByRole('button')).toMatchInlineSnapshot(`
            <button
              class="MuiButtonBase-root MuiButton-root MuiButton-contained sc-bdnxRM jBLwor"
              tabindex="0"
              type="button"
            >
              <span
                class="MuiButton-label"
              />
              <span
                class="MuiTouchRipple-root"
              />
            </button>
        `);
    });
    it('should handle user click', () => {
        const handleClick = jest.fn();
        render(<ColorButton onClick={handleClick} />);

        userEvent.click(screen.getByRole('button'));
        expect(handleClick).toBeCalledTimes(1);
    });
});
