import { render } from "@testing-library/react"
import Header from "../Header"

describe('header component', () => {
    test('renders header component', ()=>{
        const component = render(<Header />);
        expect(component).toBeInTheDocument();
    })
    test('should not show now showing initially', () => {
        const component = render(<Header />);
        const text = component.findAllByText('NOW SHOWING');
        expect(text).not.toBeInTheDocument();        
    })
})