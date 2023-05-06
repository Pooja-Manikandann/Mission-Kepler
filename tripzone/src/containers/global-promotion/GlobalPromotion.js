import React, { useCallback, memo, useMemo, useState, useEffect } from "react";
import TouristSpots from "../../components/tourist-spots/TouristSpots";
import styles from "./GlobalPromotion.module.scss";
import getTouristSpots from "../../services/getTouristSpots";
import { ALL } from "../../constants/appConstants";

const GlobalPromotion = (props) => {
    // const { touristSpots } = props;
    console.log("global promotion")
    const [globalTouristSpots, setGlobalTouristSpots] = useState([]);

    useEffect(() => {
        console.log("use memo global promo")
        async function updateGlobalPromotion() {
            let response = await getTouristSpots(ALL);
            setGlobalTouristSpots(response);
            // console.log("res", response)
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