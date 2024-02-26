import { render } from "@testing-library/react"
import { SideBar } from "../SideBar"
import store from "src/store"
import { Provider } from "react-redux"

describe('side bar compoenent', () => {
    it('renders sidebar successfully', () => {
        render(
        <Provider store={store}><SideBar /></Provider>)
    })
})