import React from 'react';
import styles from './Button.module.scss';
import { buttonProps } from '../../modals/modal';

export const defaultProps = {
    label: 'button',
    size: '',
    disabled: false,
    color: '',
    onClick: () => {},
    dataTestId: '',
};

/**
 * @description function to render button component
 * @param param required props to render button
 * @returns button element with the expected props
 */
const Button = ({
    label,
    size,
    disabled,
    color,
    onClick,
    dataTestId,
}: buttonProps) => {
    const className = `${styles.cineflexButton} ${size ? styles[size] : ''} ${
        disabled ? styles.disabled : ''
    } ${color ? styles[color] : ''}`;
    return (
        <button
            className={className}
            disabled={disabled}
            data-testid={dataTestId}
            onClick={() => {
                onClick();
            }}
        >
            {label}
        </button>
    );
};

Button.defaultProps = defaultProps;

export default Button;
