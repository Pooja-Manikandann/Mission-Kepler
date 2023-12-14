import { render } from '@testing-library/react';
import CustomLoader from '../CustomLoader';

describe('custom loader component', () => {
    test('renders custom loader component wihtout crashing', () => {
        render(<CustomLoader />);
    });
});
