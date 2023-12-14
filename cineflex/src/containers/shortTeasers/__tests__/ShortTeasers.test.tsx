import { render, screen } from '@testing-library/react';
import ShortTeasers from '../ShortTeasers';

describe('short teasers component', () => {
    test('renders teaser card compoenent correctly with title', () => {
        render(<ShortTeasers />);
        expect(screen.getByText('Short Teasers'));
    });
});
