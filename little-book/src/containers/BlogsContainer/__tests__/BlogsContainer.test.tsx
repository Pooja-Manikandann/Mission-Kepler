import { fireEvent, render, screen } from "@testing-library/react"
import BlogsContainer from "../BlogsContainer"
import { Provider } from "react-redux"
import store from "src/store"
import userEvent from "@testing-library/user-event"

describe('blogs container component', () => {
    it('renders blogs container successfully', () => {
        render(<Provider store={store}> <BlogsContainer /> </Provider>)
    })
    it('calls function on button click', () => {
        render(<Provider store={store}> <BlogsContainer /> </Provider>)
        const button = screen.getByRole('button')
        fireEvent.click(button)
    })
    it('calls function on click blog', () => {
        render(<Provider store={store}> <BlogsContainer /> </Provider>)
        const blog = screen.getByTestId('blog');
        fireEvent.click(blog);
    })
    it('trigger function based on search key', () => {
        render(<Provider store={store}> <BlogsContainer /> </Provider>)
        const input = screen.getByTestId('input');
        userEvent.type(input, 'time')
        fireEvent.keyDown(input, {key: 'Enter', code: 13})
    })
})