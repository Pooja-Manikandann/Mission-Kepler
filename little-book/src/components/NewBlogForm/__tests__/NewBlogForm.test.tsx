import { render, screen } from "@testing-library/react"
import NewBlogForm, { defaultProps } from "../NewBlogForm"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import store from "src/store"

describe('new blog form compoenent', () =>{
    it('render component successfully', () => {
        render(<Provider store={store}><NewBlogForm {...defaultProps} /></Provider>)
    })
    it('calls function on change of input and textarea', async() => {
        render(<Provider store={store}><NewBlogForm {...defaultProps} /></Provider>)
        const input = await screen.findByTestId('input')
        const textarea = await screen.findByTestId('textarea')
        userEvent.type(input, 'heelo')
        userEvent.type(textarea, 'heelo')
    })
})