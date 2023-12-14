import { render, screen } from "@testing-library/react"
import Login from "../Login"
import { FORM_CONSTANTS } from "src/constants";
import { BrowserRouter as Router } from "react-router-dom";

describe('login page', () => {
    const { TITLE, CAPTION } = FORM_CONSTANTS.LOGIN_FORM;
    test('login page renders without crashing', ()=>{
        render(<Router><Login /></Router>)
    })
    test('login page contains all the static content', () => {
        render(<Router><Login /></Router>)
        expect(screen.getAllByText(TITLE))
        expect(screen.getAllByText(CAPTION))
    })
})