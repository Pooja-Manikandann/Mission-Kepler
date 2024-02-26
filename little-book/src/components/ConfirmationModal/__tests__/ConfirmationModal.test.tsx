import { fireEvent, render, screen } from "@testing-library/react"
import ConfirmationModal, { defaultProps } from "../ConfirmationModal"
import store from "src/store"
import { Provider } from "react-redux"

describe('conifrmation modal', ()=>{
    it('renders modal successfully', () => {
        render(
            <Provider store={store}><ConfirmationModal {...defaultProps} /></Provider>
        )
    })
    it('renders modal successfully and has text', () => {
        render(<Provider store={store}><ConfirmationModal {...defaultProps} /></Provider>)
        expect(screen.getByText("You're in the middle of editing blog are you sure do you want to leave?")).toBeInTheDocument();

    })
    it('calls functions on button click', () => {
        const onCloseModal = jest.fn()
        const closeModal = jest.fn()
        render(
            <Provider store={store}><ConfirmationModal onCloseModal={onCloseModal} closeModal={closeModal} /></Provider>
        )

        const buttons = screen.getAllByRole('button')
        fireEvent.click(buttons[0]);
        expect(onCloseModal).toHaveBeenCalled()
        fireEvent.click(buttons[1]);
        expect(closeModal).toHaveBeenCalled()
    })
})