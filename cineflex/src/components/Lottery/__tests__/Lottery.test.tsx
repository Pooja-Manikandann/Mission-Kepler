import { act, fireEvent, render, screen, within } from "@testing-library/react"
import Lottery from "../Lottery"
import userEvent from "@testing-library/user-event";

describe('lottery component', () => {

    test('button is diasabled initially', ()=>{
        const component = render(<Lottery />);
        const button = component.findByRole('button');
        expect(button).toBeDisabled();
    })

    test('button should be enabled after 10 characters', async()=>{
        const component = render(<Lottery />);
        const inputField = component.findByRole('input');
        userEvent.type(await inputField, '9876543210')
        act(() =>{
            const button = component.findByRole('button');
            expect(button).toBeEnabled();
        })
    })

    test('show success text', () => {
        const lotteryResult = 'Hurray! You won a free ticket to Blind Date on Wednesday'
        render(<Lottery />);
        expect(screen.getByText(lotteryResult));
    })
})