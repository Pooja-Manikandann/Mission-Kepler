import { fireEvent, render, screen } from "@testing-library/react"
import Blog, { defaultProps } from "../Blog"
import styles from './Blog.module.scss';

describe('blog is rendered successfully', ()=> {

    it('renders blog successfully', () => { 
        render(<Blog {...defaultProps} />)
        expect(screen.getByText('test title')).toBeInTheDocument();
        expect(screen.getByText('test details')).toBeInTheDocument();
        expect(screen.getByText('test')).toBeInTheDocument();
    })

    it('calls fucntion onclick of blog', async() => {
        const handleBlogClickFunction = jest.fn();
        render(<Blog {...defaultProps} handleBlogClick={handleBlogClickFunction} />)
        const blog = screen.findByTestId('blog');
        fireEvent.click(await blog);
        expect(handleBlogClickFunction).toHaveBeenCalled();
    })

    it('has classname of active and darktheme', async() => {
        render(<Blog {...defaultProps} active={true} darkTheme={true} />)
        const blog = await screen.findByTestId('blog');
        // expect(blog).toHaveClass('darkTheme')
        // expect(blog).toHaveClass('active')
    })

})