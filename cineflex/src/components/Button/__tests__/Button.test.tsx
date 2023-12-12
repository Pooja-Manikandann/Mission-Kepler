import { render, fireEvent } from '@testing-library/react';
import Button, { defaultProps } from '../Button';

describe('Button', () => {
    test('should render button text correctly', () => {
        const { getByText } = render(<Button {...defaultProps}/>);
        expect(getByText('button')).toBeInTheDocument();
    });

    test('should call onClick function when clicked', async() => {
        const handleClick = jest.fn();
        const buttonComponent = render(
            <Button dataTestId='button' size='' disabled={false} color='' label='LOGIN' onClick={handleClick} />
        );

        const button = buttonComponent.getByTestId('button');
        expect(button).toBeEnabled();
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalled();
    });

    test('should disable button when disabled prop is true', () => {
        const { getByTestId } = render(
            <Button dataTestId='button' size='' disabled={true} color='' label='LOGIN' />
        );
        const button = getByTestId('button');
        expect(button).toBeDisabled();
    });
});
