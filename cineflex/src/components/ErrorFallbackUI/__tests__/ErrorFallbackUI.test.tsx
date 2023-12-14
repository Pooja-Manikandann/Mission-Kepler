import { render, screen } from '@testing-library/react';
import ErrorFallbackUI from '../ErrorFallbackUI';

describe('error fallback component', () => {
    test('component renders with error message', () => {
        render(<ErrorFallbackUI />);
        expect(screen.getAllByText('Sorry :( Better luck next time'));
    });
});
