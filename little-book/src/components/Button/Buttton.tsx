import React from "react";
import { buttonProps } from "../../modals/modals";
import styles from './Button.module.scss';

const Button = (props: buttonProps) => {
    const { label, type, onClick } = props
    return (
        <button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;