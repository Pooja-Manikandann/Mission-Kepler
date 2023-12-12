import { render, screen } from "@testing-library/react"
import Header from "../Header"
import {BrowserRouter as Router} from 'react-router-dom';

describe('header component', () => {
    test('renders header component without crashing', ()=>{
        render(<Router><Header /></Router>);
    })
    test('should not show now showing initially', () => {
        const component = render(<Router><Header /></Router>);
        const text = screen.findAllByText('NOW SHOWING');
        expect(text);        
    })
})