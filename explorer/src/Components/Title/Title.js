import React from "react"
import styles from "./Title.module.scss"
import PropTypes from "prop-types"

const Title = (props) => {
    const { title, caption } = props;
    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.caption}>{caption}</h3>
        </div>
    )
}

Title.propsType = {
    title: PropTypes.string,
    caption: PropTypes.string
}

Title.defaultProps = {
    title: "",
    caption: ""
}

export default Title;