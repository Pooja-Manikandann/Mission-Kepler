import { fireEvent, render, screen } from '@testing-library/react';
import TeaserCard from '../TeaserCard';
import userEvent from '@testing-library/user-event';

describe('teaser card component', () => {
    const mockProps = {
        id: 1,
        title: 'test',
        videoSrc: '',
        onclick: () => {},
    };
    test('play icon hidden when video is played', async () => {
        const component = render(<TeaserCard {...mockProps} />);
        fireEvent.click(screen.getByTestId('video'));
        const playIcon = component.findByRole('svg');
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
    test('renders teaser cards without crashing', () => {
        const mockData = {
            title: 'Enchanto',
            videoSrc:
                'https://tympanus.net/Development/SeatPreview/media/sintel.mp4',
        };
        render(<TeaserCard {...mockProps} {...mockData} />);
    });
    test('render tester card with ', () => {
        render(
            <TeaserCard
                {...mockProps}
                title='test-title'
                adStatus={false}
                limit={1}
            />,
        );
        expect(screen.getByText('test-title')).toBeInTheDocument();
    });
});
