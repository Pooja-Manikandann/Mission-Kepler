import React from "react";
import styles from "./Button.module.scss"

const Button = (props) => {
    const { label, variant, onClick } = props;
    return (
        <button className={styles.button} onClick={onClick}>{label}</button>
    )
}

export default Button;