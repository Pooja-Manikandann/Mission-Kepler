import React from "react"
import styles from "./ErrorMessage.module.scss"
import PropTypes from "prop-types"

const ErrorMessage = (props) => {
    const { message } = props;
    return (
        <span className={styles.errorMessage}>{message}</span>
    )
}

ErrorMessage.propTypes = {
    message: PropTypes.string
}

export default ErrorMessage;