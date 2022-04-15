import React from 'react';
import { render } from '@testing-library/react';
import { ThemeWrapper } from '../../utils/test-helpers';

import PageLayout from './index';

describe('PageLayout component', () => {
    it('should match to snapshot', () => {
        const { container } = render(<PageLayout />, {
            wrapper: ThemeWrapper,
        });

        expect(container).toMatchInlineSnapshot(`
            <div>
              <div
                class="MuiBox-root css-1iwgyoj"
              />
            </div>
        `);
    });
});
