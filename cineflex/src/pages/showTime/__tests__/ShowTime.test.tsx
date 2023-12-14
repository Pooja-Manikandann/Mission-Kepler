import { render, screen } from "@testing-library/react"
import ShowTime from "../ShowTime"
import { APP_CONSTANTS } from "src/constants";
import userEvent from "@testing-library/user-event";

describe('now showing page', ()=>{
    const { TITLE } = APP_CONSTANTS.NOW_SHOWING;
    const { SINTEL_TITLE, SINTEL_DESCRIPTION } = APP_CONSTANTS.TRAILER;
    test('page renders without crashing', ()=>{
        render(<ShowTime />)
    })
    test('page renders with all static text included', () => {
        render(<ShowTime />)
        expect(screen.getAllByText(TITLE))
        expect(screen.getAllByText(SINTEL_TITLE))
        expect(screen.getAllByText(SINTEL_DESCRIPTION))
    })
    test('play video function is triggered on click of icon', ()=>{
        const component = render(<ShowTime />);
        const icon = component.getByTestId('icon')
        const video = component.getByTestId('video')
        userEvent.click(icon);
        expect(screen.findByTestId('video'));
        
    })

})