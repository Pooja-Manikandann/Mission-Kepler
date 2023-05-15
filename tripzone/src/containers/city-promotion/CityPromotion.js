import React, { useContext, useRef } from 'react'
import TouristSpots from '../../components/tourist-spots/TouristSpots';
import styles from "./CityPromotion.module.scss"
import { isEmpty } from "lodash"
import AppContext from '../../context/appContext';

const CityPromotion = () => {

    const { cityPromotion } = useContext(AppContext)
    const { cityInformation, touristSpots } = cityPromotion;

    const cityPromotionRef = useRef(null)

    console.log("city promotion")

    return (
        <div className={styles.cityPromotionWrapper} ref={cityPromotionRef}>
            {!isEmpty(cityInformation) && !isEmpty(touristSpots) ?
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