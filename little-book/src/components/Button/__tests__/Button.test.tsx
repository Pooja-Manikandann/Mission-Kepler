import { fireEvent, render, screen } from "@testing-library/react"
import Button, { defaultProps } from "../Buttton"

describe('button component', ()=> {
    it('renders button succefullly', () => {
        render(<Button {...defaultProps} />)
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
    it('calls fucntion on button click', async() => {
        const handleClick = jest.fn();
        render(<Button {...defaultProps} onClick={handleClick} />)
        const button = screen.findByTestId('button');
        fireEvent.click(await button);
        expect(handleClick).toHaveBeenCalled();
    })
})