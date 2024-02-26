import React from "react";
import { buttonProps } from "../../modals/modals";
import styles from './Button.module.scss';

export const defaultProps = {
    label: 'button',
    type: 'primary',
    onClick: () => { },
}

const Button = (props: buttonProps) => {
    const { label, type, onClick } = props
    return (
        <button data-testid='button' className={`${styles.button} ${styles[type]}`} onClick={onClick}>
            {label}
        </button>
    )
}

Button.defaultProps = defaultProps;

export default Button;