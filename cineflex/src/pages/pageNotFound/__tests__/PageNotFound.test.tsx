import { render, screen } from "@testing-library/react"
import { PageNotFound } from "../PageNotFound"

describe('page not found page', () => {
    test('renders page without crashing', () =>{
        render(<PageNotFound />);
        expect(screen.findAllByText('404'))
        expect(screen.findAllByText("4Sorry, we couldn't find this page !!"))
    })
})