import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input, { defaultProps } from '../Input';

describe('Input component', () => {
    const mockFunction = () => {
        console.log('mock register function');
    };
    test('should render text input', () => {
        const component = render(
            <Input {...defaultProps} register={mockFunction} />,
        );
        expect(component).not.toBeNull();
    });

    test('should render text input content', () => {
        const labelText = 'label';
        const component = render(
            <Input {...defaultProps} label={labelText} register={mockFunction} />,
        );

        const userInput = component.getByText(labelText);

        act(() => {
            expect(userInput).toBeInTheDocument();
            expect(userInput).toBeEnabled;
        });
    });
});
