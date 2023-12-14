import { render, screen } from '@testing-library/react';
import Home from '../Home';
import sindel from '../../../assets/sindel';

describe('home page', () => {
    test('renders home page without crashing', () => {
        render(<Home />);
        const coverImage = screen.getByRole('img');
        expect(coverImage).toHaveAttribute('src', sindel);
        expect(coverImage).toHaveAttribute('alt', 'cover');
    });
});
