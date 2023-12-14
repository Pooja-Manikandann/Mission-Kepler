import { render } from "@testing-library/react"
import ProtectedRoute from "../ProtectedRoute"
import { BrowserRouter as Router } from 'react-router-dom';

describe('protected route component', ()=>{
    test('protected route renders without crashing', () => {
        render(<Router><ProtectedRoute /></Router>)
    })
})