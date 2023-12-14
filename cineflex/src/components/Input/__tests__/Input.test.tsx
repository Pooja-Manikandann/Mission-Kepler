import { act, render, screen } from '@testing-library/react';
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
    test('should render text error content', () => {
        const labelText = 'label';
        const mockData = {
            label: 'label',
            type: '',
            register: mockFunction,
            name: 'test',
            variant: '',
            theme: '',
            placeHolder: '',
            border: '',
            maxLength: 100,
            error: { test: { message: 'testing error' } },
            datatestid: '',
        };
        const component = render(<Input {...mockData} />);
        expect(screen.getByText(mockData.error.test.message));
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
            userEvent.type(userInput, 'admin');
        });
    });
});
