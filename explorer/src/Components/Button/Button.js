import React from "react"
import "./Button.scss"

const Button = (props) => {
    const { label, className } = props;
    return (
        <button className={className}>{label}</button>
    )
}

export default Button;