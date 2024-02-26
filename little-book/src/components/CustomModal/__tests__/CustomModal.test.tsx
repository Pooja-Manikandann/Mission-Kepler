import store from "src/store"
import { Provider } from "react-redux"
import { render, screen } from "@testing-library/react"
import CustomModal from "../CustomModal"

describe('custom modal component', () => { 
    it('renders modal sucessfully', () => {
        render(
            <Provider store={store}>
                <CustomModal />
            </Provider>
        )
    })
    it('calls functions on button and overlay click', () => {
        render(
            <Provider store={store}>
                <CustomModal />
            </Provider>
        )
        const overlay = screen.getByTestId('overlay');
    })
    
 })