import { fireEvent, render, screen } from "@testing-library/react"
import BlogDescription from "../BlogDescription"
import { Provider } from "react-redux"
import store from "src/store"
import userEvent from "@testing-library/user-event"

describe('blog description compoennt', () => {
    it('renders blog description successfully', () =>{
        render(<Provider store={store}><BlogDescription /></Provider>)
        // const input = screen.getAllByTestId('heelo')
        // expect(screen.findByText('test')).toBeInTheDocument();
        // expect(screen.findByText('test details')).toBeInTheDocument();
        // expect(screen.findByText('national')).toBeInTheDocument();
    })
    it('trrigeer function on edit button click', () =>{
        render(<Provider store={store}><BlogDescription /></Provider>)
        const button = screen.getByRole('button')
        fireEvent.click(button);
    })
    it('trrigeer function on save button click', async() =>{
        render(<Provider store={store}><BlogDescription isEditView={true} /></Provider>)
        const input = screen.getByTestId('input');
        const textarea = screen.getByTestId('textarea');
        userEvent.type(input,'scfs');
        userEvent.type(textarea,'scfs');
        const button = screen.getAllByRole('button')
        fireEvent.click(button[0]);
    })
    it('trriger function on dicard button click', () =>{
        render(<Provider store={store}><BlogDescription isEditView={true} /></Provider>)
        const button = screen.getAllByRole('button')
        fireEvent.click(button[1]);
    })
})