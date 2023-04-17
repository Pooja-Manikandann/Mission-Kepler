import React from "react";
import styles from "./Button.module.scss"
import PropTypes from "prop-types";

const Button = (props) => {
    const { label, variant, onClick } = props;
    return (
        <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>{label}</button>
    )
}

Button.defaultProps = {
    label: "",
    variant: "",
    onClick: () => { }
}

Button.propType = {
    label: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;