import { act, fireEvent, render, screen, within } from "@testing-library/react"
import Lottery from "../Lottery"
import userEvent from "@testing-library/user-event";

describe('lottery component', () => {

    test('button is diasabled initially', ()=>{
        const {getByText} = render(<Lottery />);
        const button = screen.findByRole('button');
        expect(getByText("I'm feeling lucky")).toHaveAttribute('disabled')
    })

    test('button should be enabled after 10 characters', async()=>{
        const { getByRole, getByText } = render(<Lottery />);
        userEvent.type(getByRole('textbox'), '9876543210')
        act(() =>{
            expect(getByText("I'm feeling lucky")).toBeEnabled();
        })
    })
})