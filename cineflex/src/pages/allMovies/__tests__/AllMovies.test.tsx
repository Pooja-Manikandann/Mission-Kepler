import { fireEvent, render, screen } from '@testing-library/react';
import AllMovies from '../AllMovies';
import { BrowserRouter as Router } from 'react-router-dom';
import { APP_CONSTANTS } from 'src/constants';

describe('all movies page', () => {
    const { TITLE } = APP_CONSTANTS.ALL_MOVIES;
    test('page renders without crashing', () => {
        render(
            <Router>
                <AllMovies />
            </Router>,
        );
    });
    test('page renders allstatic content', () => {
        const component = render(
            <Router>
                <AllMovies />
            </Router>,
        );
        expect(screen.getByText(TITLE));
    });
    test('load more button functionality', () => {
        const component = render(
            <Router>
                <AllMovies />
            </Router>,
        );
        const button = screen.getByText('load more')
        fireEvent.click(button);
    });
});
