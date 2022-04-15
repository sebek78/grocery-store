import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeWrapper } from '../../utils/test-helpers';

import ProgressButton from '../../components/ProgressButton';

describe('ProgressButton component', () => {
    it('should match to snapshot', () => {
        const { container } = render(
            <ProgressButton
                onClick={jest.fn()}
                isRequesting={false}
                label="test-label"
            />,
            {
                wrapper: ThemeWrapper,
            }
        );

        expect(screen.queryByRole('progressbar')).toBeNull();
        expect(screen.getByText('test-label')).toBeDefined();
        expect(screen.getByRole('button')).toHaveProperty('type', 'button');
        expect(container).toMatchSnapshot();
    });

    it('should have "submit" type when this type  was provided', () => {
        render(
            <ProgressButton
                onClick={jest.fn()}
                isRequesting={false}
                label="test-label"
                type="submit"
            />,
            {
                wrapper: ThemeWrapper,
            }
        );

        expect(screen.getByRole('button')).toHaveProperty('type', 'submit');
    });

    it('should call received action after a click', () => {
        const action = jest.fn();

        render(
            <ProgressButton
                onClick={action}
                isRequesting={false}
                label="test-label"
                type="button"
            />,
            {
                wrapper: ThemeWrapper,
            }
        );

        expect(action).toHaveBeenCalledTimes(0);
        fireEvent.click(screen.getByRole('button'));
        expect(action).toHaveBeenCalledTimes(1);
    });

    it('should match to snapshot when property "isRequesting" is true', () => {
        const { container } = render(
            <ProgressButton
                onClick={jest.fn()}
                isRequesting={true}
                label="test-label"
            />,
            {
                wrapper: ThemeWrapper,
            }
        );

        expect(container).toMatchSnapshot();
        expect(screen.queryByRole('progressbar')).toBeDefined();
    });
});
