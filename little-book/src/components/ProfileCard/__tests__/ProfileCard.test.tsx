import { render, screen } from "@testing-library/react"
import ProfileCard, { defaultProps } from "../ProfileCard"

describe('profile card component', () => {
    it('renders profile card successfully', () => {
        render(<ProfileCard {...defaultProps}/>)
        expect(screen.getByText('test')).toBeInTheDocument();
        expect(screen.getByText('test username')).toBeInTheDocument();
    })
})