import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App tests', () => {
    it('contains login text', () => {
        render(
            <Router>
                <App />
            </Router>,
        );
    });
});
