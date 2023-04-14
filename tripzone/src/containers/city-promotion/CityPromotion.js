import React from 'react'
import Polaroid from "../../components/polaroid/Polaroid";
import styles from "./CityPromotion.module.scss"


const CityPromotion = (props) => {
    const { cityInformation, touristSpots } = props;
    console.log("city info", cityInformation)
    return (
        <div className={styles.cityPromotionWrapper}>
            <h3 className={styles.promotionHeading}>Travelling to <span>{cityInformation.cityName}? Know more about it.</span></h3>
            <h4 className={styles.cityTemperature}>{cityInformation.weather}</h4>
            <p className={styles.cityDescription}>{cityInformation.description}</p>
            <div className={styles.polaroidsContainer}>
                {/* {touristSpots.map((touristSpot) => ( */}
                <Polaroid details={touristSpots} />
                {/* ))} */}
            </div>
        </div>
    )
}

export default CityPromotion;