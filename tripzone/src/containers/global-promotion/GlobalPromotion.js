import React, { memo, useState, useEffect } from "react";
import TouristSpots from "../../components/tourist-spots/TouristSpots";
import styles from "./GlobalPromotion.module.scss";
import getTouristSpots from "../../services/getTouristSpots";
import { ALL } from "../../constants/appConstants.constant";

const GlobalPromotion = (props) => {
    // const { touristSpots } = props;
    console.log("global promotion")
    const [globalTouristSpots, setGlobalTouristSpots] = useState([]);

    useEffect(() => {
        async function updateGlobalPromotion() {
            let response = await getTouristSpots(ALL);
            setGlobalTouristSpots(response);
            return response;
        }
        updateGlobalPromotion();
    }, [])

    return (
        <div className={styles.globalPromotionWrapper}>
            <h2>The world is Beautiful. Keep Travelling</h2>
            <TouristSpots touristSpots={globalTouristSpots} />
        </div>
    )
}

export default memo(GlobalPromotion);