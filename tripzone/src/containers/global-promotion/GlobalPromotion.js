import React from "react";
import TouristSpots from "../../components/tourist-spots/TouristSpots";
import styles from "./GlobalPromotion.module.scss";

const GlobalPromotion = (props) => {
    const { touristSpots } = props;
    console.log("global promotion")
    return (
        <div className={styles.globalPromotionWrapper}>
            <h2>The world is Beautiful. Keep Travelling</h2>
            <TouristSpots touristSpots={touristSpots} />
        </div>
    )
}

export default GlobalPromotion;