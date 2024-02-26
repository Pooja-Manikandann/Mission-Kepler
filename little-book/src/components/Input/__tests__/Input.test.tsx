import { fireEvent, render, screen } from "@testing-library/react"
import Input, { defaultProps } from "../Input"
import userEvent from "@testing-library/user-event"

describe('input component', () => {
    it('renders input component successfully', () => {
        render(<Input {...defaultProps} />)
        const input = screen.getByTestId('input')
        expect(input).toBeInTheDocument();
        userEvent.type(input, 'hello');
    })
    it('calls function on enter pressed', () => {
        render(<Input {...defaultProps} />)
        const input = screen.getByTestId('input')
        expect(input).toBeInTheDocument();
        userEvent.type(input, 'hello');
        fireEvent.keyDown(input, {key: 'Enter', code: 13});
    })
})