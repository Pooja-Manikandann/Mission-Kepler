import { act, fireEvent, render, screen } from "@testing-library/react"
import LoginForm from "../LoginForm"
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";

describe('login form component', () => {
    test('renders component without crashing', ()=> {
        render(<Router><LoginForm /></Router>)
        // const form = screen.getAllByAltText('wed')
        const form = screen.getByTestId('form')
        const emailInput = screen.getByTestId('email')
        const passwordInput = screen.getByTestId('password')
        userEvent.type(emailInput, 'admin@gmail.com');
        userEvent.type(passwordInput, 'admin');
        act(()=>{
            fireEvent.submit(form)
        })
    })
})