import React from "react";
import errorImageProvider from "../../utils/errorImageProvider";
import styles from "./Polaroid.module.scss"
import { ASSETS_PATH } from "../../constants/appConstants.constant";

const Polaroid = (props) => {
    const { details } = props;

    return (
        <div className={styles.polaroidWrapper}>
            <img src={`${ASSETS_PATH}${details.image}`} alt="tourist spot" onError={errorImageProvider} />
            <div className={styles.detailsWrapper}>
                <h5 className={styles.heading}>{details.place}</h5>
                <h6 className={styles.subHeading}>{details.city}</h6>
            </div>
        </div>
    )
}

export default Polaroid;