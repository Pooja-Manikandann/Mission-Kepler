import React from "react"
import styles from "./Button.module.scss"
import PropTypes from "prop-types"

const Button = (props) => {
    const { label, onClick, disabled, variant } = props;
    return (
        <button className={`${variant && styles[variant]} ${styles.regular}`} onClick={onClick} disabled={disabled}>{label}</button>
    )
}

Button.defaultProps = {
    label: "Button",
    onClick: () => { },
    disabled: false,
    variant: ""
}

Button.propType = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    variant: PropTypes.string
}

export default Button;