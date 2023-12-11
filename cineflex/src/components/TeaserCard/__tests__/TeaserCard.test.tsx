import { fireEvent, render, screen } from "@testing-library/react"
import TeaserCard from "../TeaserCard"
import userEvent from "@testing-library/user-event"

describe('teaser card component', () => {
    const mockProps = {
        id:1,
        title:'test',
        videoSrc: '',
        onclick: ()=>{},
    }
    test('play icon hidden when video is played', async() => {
        const component = render(<TeaserCard {...mockProps} />)
        const video = component.findByRole('video');
        expect(video).toBeInTheDocument();
        userEvent.click(await video)
        const playIcon = component.findByRole('svg');
        expect(playIcon).not.toBeInTheDocument();
        
    })
    test('renders teaser cards without crashing', () => {
            const mockData =  {
                title: "Enchanto",
                videoSrc: "https://tympanus.net/Development/SeatPreview/media/sintel.mp4"
            }
            render(<TeaserCard {...mockProps} {...mockData} />)
    })
})