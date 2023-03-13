import React from "react"
import styles from "./Button.module.scss"
import PropTypes from "prop-types"

const Button = (props) => {
    const { label, onClick, disabled } = props;
    return (
        <button className={styles.regular} onClick={onClick} disabled={disabled}>{label}</button>
    )
}

Button.defaultProps = {
    label: "Button",
    onClick: () => { },
    disabled: false
}

Button.propType = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default Button;