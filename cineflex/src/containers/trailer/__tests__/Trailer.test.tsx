import { fireEvent, render, screen } from '@testing-library/react';
import Trailer from '../Trailer';
import { APP_CONSTANTS } from '../../../constants';
import { BrowserRouter as Router } from 'react-router-dom';

describe('trailer component', () => {
    test('component renders without crashing', () => {
        render(
            <Router>
                <Trailer />
            </Router>,
        );
    });
    test('check if it has all static content', () => {
        const {
            TITLE,
            SINTEL_TITLE,
            SINTEL_DESCRIPTION,
            WATCH_NOW,
            SIGN_IN_LABEL,
            SIGN_IN_REQ_LABEL,
        } = APP_CONSTANTS.TRAILER;
        render(
            <Router>
                <Trailer />
            </Router>,
        );
        expect(screen.findByText(TITLE));
        expect(screen.findByText(SINTEL_TITLE));
        expect(screen.findByText(SINTEL_DESCRIPTION));
        expect(screen.findByText(WATCH_NOW));
        expect(screen.findByText(SIGN_IN_LABEL));
        expect(screen.findByText(SIGN_IN_REQ_LABEL));
    });
    test('checks if navigate works fine', () => {
        render(
            <Router>
                <Trailer />
            </Router>,
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);
    });
});
