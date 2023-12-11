import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
    it('contains login text', () => {
    render(<App />);
        const heading = screen.getByText(/login/i);
        expect(heading).toBeInTheDocument()
    });
});