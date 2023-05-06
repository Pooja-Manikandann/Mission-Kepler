import React, { memo } from 'react'
import TouristSpots from '../../components/tourist-spots/TouristSpots';
import styles from "./CityPromotion.module.scss"
import { isEmpty } from "lodash"



const CityPromotion = (props) => {
    const { cityInformation, touristSpots } = props;
    console.log("cicty promotion", cityInformation, touristSpots)
    return (
        <div className={styles.cityPromotionWrapper}>
            {!isEmpty(cityInformation) ?
                <div><h3 className={styles.promotionHeading}>Travelling to <span>{cityInformation.cityName}? Know more about it.</span></h3>
                    <h4 className={styles.cityTemperature}>{cityInformation.weather}</h4>
                    <p className={styles.cityDescription}>{cityInformation.description}</p>
                    <TouristSpots touristSpots={[touristSpots]} /> </div> :
                <p>Please search for a valid city code</p>
            }
        </div>
    )
}

export default CityPromotion;