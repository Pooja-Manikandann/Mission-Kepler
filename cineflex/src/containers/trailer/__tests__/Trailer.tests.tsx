import { render, screen } from "@testing-library/react"
import Trailer from "../Trailer"
import { APP_CONSTANTS } from "../../../constants";

describe('trailer component', ()=> {
    test('component renders without crashing', ()=>{
        const component = render(<Trailer />);
        expect(component).toBeInTheDocument();
    })
    test('check if tit has all static content', ()=>{
        const { TITLE, SINTEL_TITLE, SINTEL_DESCRIPTION, WATCH_NOW, SIGN_IN_LABEL, SIGN_IN_REQ_LABEL } = APP_CONSTANTS.TRAILER;
        render(<Trailer />);
        expect(screen.findByText(TITLE))
        expect(screen.findByText(SINTEL_TITLE))
        expect(screen.findByText(SINTEL_DESCRIPTION))
        expect(screen.findByText(WATCH_NOW))
        expect(screen.findByText(SIGN_IN_LABEL))
        expect(screen.findByText(SIGN_IN_REQ_LABEL))
    })
})