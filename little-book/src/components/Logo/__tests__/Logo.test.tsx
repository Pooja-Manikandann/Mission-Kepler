import { render, screen } from "@testing-library/react"
import Logo from "../Logo"
import store from "src/store"
import { Provider } from "react-redux"

describe('logo component', () => {
    it('renders logo successfully', () => {
        render(<Provider store={store}><Logo /></Provider>)
    })
})