import { render, screen } from "@testing-library/react"
import Filters, { defaultProps } from "../Filters"
import userEvent from "@testing-library/user-event"

describe('filters component', () => {
    it('renders filters component sucessfully', ()=>{
        render(<Filters {...defaultProps} />)
        expect(screen.getByText('National Blogs')).toBeInTheDocument();
        expect(screen.getByText('International Blogs')).toBeInTheDocument();
        expect(screen.getByText('Regional Blogs')).toBeInTheDocument();
    })

    it('function called on change of checkbox', () => {
        render(<Filters {...defaultProps} />)
        const filters = screen.getAllByTestId('checkbox')
        userEvent.click(filters[0]);
    })
})