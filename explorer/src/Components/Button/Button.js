import React from "react"
import "./Button.scss"
import PropTypes from 'prop-types';

const Button = (props) => {
    const { label, className, submitForm } = props;
    return (
        <button className={`button ${className}`} onClick={submitForm}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    submitForm: PropTypes.func
}

Button.defaultProps = {
    label: "Button",
    className: "",
    submitForm: () => { }
}

export default Button;