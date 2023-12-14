import { fireEvent, render, screen } from '@testing-library/react';
import MovieDescription from '../MovieDescription';
import { defaultProps } from '../MovieDescription';

describe('Movie description component', () => {
    const mocklikehandler = jest.fn();
    const mockData = {
        movieDetails: {
            link: 'https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            movie: 'Drishyam',
            likes: '222',
            id: '1',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
            actors: ['Mohanlal', 'Meena', 'Ansiba', 'Ester', 'Siddique', 'Asha'],
        },
        updateLike: () => {},
    };
    test('if components renders without crashing', () => {
        render(<MovieDescription {...mockData} />);
    });
    test('should render text properly', () => {
        render(<MovieDescription {...defaultProps} />);
        expect(
            screen.getByText(/Please select a movie to view movie description/i),
        ).toBeInTheDocument();
    });
    test('like count increased', async () => {
        const component = render(
            <MovieDescription {...mockData} updateLike={mocklikehandler} />,
        );
        expect(screen.getByText(mockData.movieDetails.movie));
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('alt', 'movie poster');
        expect(image).toHaveAttribute('src', mockData.movieDetails.link);
    });
    test('like count increased', async () => {
        const component = render(
            <MovieDescription {...mockData} updateLike={mocklikehandler} />,
        );
        const likeComponent = await screen.findByTestId('like');
        console.log('screen', screen);
        expect(likeComponent);
        fireEvent.click(likeComponent);
    });
});
