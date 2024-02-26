import { render } from "@testing-library/react"
import Loader from "../Loader"
import { Provider } from "react-redux"
import store from "src/store"

describe('loader component', () => {
    it('renders loader component successfully', () => {
        render(<Provider store={store}><Loader /></Provider>)
    })
})