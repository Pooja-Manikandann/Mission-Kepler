import { render, screen } from "@testing-library/react"
import AdvertisementCard, { defaultProps } from "../AdvertisementCard"

describe('advertisement card component', () => {
    test('render component withput crashing', () => {
        render(<AdvertisementCard {...defaultProps} title="test-title" />)
        expect(screen.getByText('test-title'))
    })
    test('renders advertisement image', ()=>{
        render(<AdvertisementCard {...defaultProps} imageUrl="image.png" alt="advetisement" title="test-title" />)
        console.log('screen', screen)
       const image = screen.getByRole('img');
       expect(image).toHaveAttribute('alt', 'advetisement')
    })
})