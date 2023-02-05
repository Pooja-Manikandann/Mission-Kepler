import React from "react"
import styles from "./Button.module.scss"
import PropTypes from "prop-types"

const Button = (props) => {
    const { label, onClick } = props;
    return (
        <button className={styles.regular} onClick={onClick}>{label}</button>
    )
}

Button.defaultProps = {
    label: "Button",
    onClick: () => { }
}

Button.propType = {
    label: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;