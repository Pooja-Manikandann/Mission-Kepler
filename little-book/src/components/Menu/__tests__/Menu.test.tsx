import { fireEvent, render, screen } from "@testing-library/react"
import Menu from "../Menu"
import { Provider } from "react-redux"
import store from "src/store"

describe('menu compoent', () => {
    it('renders menu successfully', () => {
        render(<Provider store={store}><Menu /></Provider>)
        const items = screen.getAllByTestId('menu-item');
        expect(items[0]).toBeInTheDocument();
        expect(items[1]).toBeInTheDocument();
    })
    it('triggers menu functions onclick', () => {
        render(<Provider store={store}><Menu /></Provider>)
        const items = screen.getAllByTestId('menu-item');
        fireEvent.click(items[0]);
        fireEvent.click(items[1]);
    })
})