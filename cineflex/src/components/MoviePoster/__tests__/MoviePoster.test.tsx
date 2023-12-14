
import { fireEvent, render, screen } from "@testing-library/react";
import MoviePoster, { defaultProps } from "../MoviePoster";
import userEvent from "@testing-library/user-event";

describe('movie poster component', () => {
    const mocklikehandler = jest.fn();
    test('like count increased', async() => {
        const component = render(<MoviePoster updateLike={mocklikehandler} />)
        const likeComponent = await screen.findByTestId('like');
        expect(likeComponent);
        fireEvent.click(likeComponent)

    });
    test('check if component renders with static content', () => {
        render(<MoviePoster />)
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('alt', 'movie poster');
        fireEvent.click(image)
    })
    test('test if liked color applied', ()=> {
        const data = {
            id: '0',
            movie:'',
            likes: '0',
            description: '',
            actors: [''],
            link:'',
            isLiked: false,
        }
        const { container } = render(<MoviePoster movieDetails={data}/>)
        expect(container.getElementsByClassName('undefined false').length).toBe(1)

    })
})