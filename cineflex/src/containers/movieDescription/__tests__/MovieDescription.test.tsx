import { render, screen } from '@testing-library/react'
import MovieDescription from '../MovieDescription';
import { defaultProps } from '../MovieDescription';

describe('Movie description component', ()=>{
    test('should render text properly', () => {
        render(
            <MovieDescription {...defaultProps} />
        )
        expect(screen.getByText(/Please select a movie to view movie description/i)).toBeInTheDocument();
    })
})