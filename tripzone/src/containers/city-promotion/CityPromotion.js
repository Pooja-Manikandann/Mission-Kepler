import React, { useContext, useEffect, useRef, useState } from 'react'
import TouristSpots from '../../components/tourist-spots/TouristSpots';
import styles from "./CityPromotion.module.scss"
import { isEmpty, isEqual } from "lodash"
import AppContext from '../../context/appContext';
import Button from '../../components/Button/Button'
import { SMALL_VARIANT } from '../../constants/appConstants.constant';

const CityPromotion = () => {

    const { cityPromotion, previousCity, setCityPromotion, setPreviousCity } = useContext(AppContext)
    const { cityInformation, touristSpots } = cityPromotion;
    const [showPreviosButton, setShowPreviosButton] = useState(false);


    const cityPromotionRef = useRef(null)

    console.log("Container - city promotion")

    function showPreviousCity() {
        setCityPromotion(previousCity);
        setPreviousCity({});
    }

    useEffect(()=>{
        console.log('use', isEmpty(previousCity), isEqual(previousCity, cityPromotion))
        console.log('use', previousCity, cityPromotion)
        if(!isEmpty(previousCity) && !isEqual(previousCity, cityPromotion)){
            setShowPreviosButton(true);
        }
        else {
            setShowPreviosButton(false);
        }
    },[cityPromotion])

    console.log('previousCity', previousCity)

    return (
        <div className={styles.cityPromotionWrapper} ref={cityPromotionRef}>
            {!isEmpty(cityInformation) && !isEmpty(touristSpots) ?
                <div>
                    <div className={styles.promotionHeader}>
                        <h3 className={styles.promotionHeading}>Travelling to <span>{cityInformation.cityName}</span>? Know more about it.</h3>
                        {showPreviosButton && 
                        <div className={styles.previosButtonWrapper}>
                            <Button label='previous' onClick={showPreviousCity} />
                        </div>}
                    </div>


                    <h4 className={styles.cityTemperature}>{cityInformation.weather}</h4>
                    <p className={styles.cityDescription}>{cityInformation.description}</p>
                    <TouristSpots touristSpots={[touristSpots]} /> </div> :
                <p>Please search for a valid city code</p>
            }
        </div>
    )
}

export default CityPromotion;