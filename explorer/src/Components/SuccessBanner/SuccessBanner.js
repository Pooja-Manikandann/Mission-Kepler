import React from "react";
import styles from "./SuccessBanner.module.scss"
import PropTypes from "prop-types"

const SuccessBanner = (props) => {
    const { details } = props;

    return (
        <div className={styles.successBannerWrapper}>
            Thank you <b>{details.name}</b> for expressing your interest in travelling with us. Our sales Team
            will get back with the best packages from <b>{details.home}</b> to <b>{details.destination}</b>
        </div>
    )
}

SuccessBanner.propTypes = {
    details: PropTypes.object
}

export default SuccessBanner;