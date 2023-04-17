import React from "react";
import styles from "./DiscountDisplayer.module.scss"

const DiscountDisplayer = (props) => {
    const { price, title } = props;
    return (
        <div className={styles.dicountDisplayerWrapper}>
            <h6 className={styles.title}>{title}</h6>
            <p className={styles.discountPrice}>$ {price}</p>
        </div>
    )
}

export default DiscountDisplayer;