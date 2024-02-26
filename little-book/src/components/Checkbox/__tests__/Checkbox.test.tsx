import { fireEvent, render, screen } from "@testing-library/react"
import Checkbox, { defaultProps } from "../Checkbox"
import userEvent from "@testing-library/user-event"

describe('check box component', () => {
    it('renders checkbox sucessfully', () => {
        render(<Checkbox {...defaultProps} />)
        expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    })
    it('calls function successfully on changing chcekbox', ()=>{
        const handleChange = jest.fn();
        render(<Checkbox {...defaultProps} onChange={handleChange} />)
        const checkbox = screen.getByTestId('checkbox')
        fireEvent.click(checkbox)
        expect(handleChange).toHaveBeenCalled();

    })

    it('toggles checjbox on click', () => {
        render(<Checkbox {...defaultProps} />)
        const checkbox = screen.getByTestId('checkbox')
        userEvent.click(checkbox)
        expect(checkbox).toBeChecked();
    })
})