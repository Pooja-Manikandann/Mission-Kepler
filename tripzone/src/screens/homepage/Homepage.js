import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../containers/header/Header';
import getCityInformation from '../../services/getCityInformation';
import getTouristSpots from '../../services/getTouristSpots';
import styles from "./Homepage.module.scss"
import LeftContainer from '../../containers/left-container/LeftContainer';
import RightContainer from '../../containers/right-container/RightContainer';

const Homepage = () => {

    const [cityInformation, setCityInformation] = useState({})
    const [touristSpots, setTouristSpots] = useState({});

    async function updateCityInformation(destination) {
        let response = await getCityInformation(destination);
        setCityInformation(response);
    }

    async function updateTouristSpotInformation(destination) {
        let response = await getTouristSpots(destination);
        console.log("check if response", response)
        setTouristSpots(response);
    }
    const fetchAndUpdateCityPromotion = useCallback((cityCode) => {
        if (cityCode) {
            updateCityInformation(cityCode);
            updateTouristSpotInformation(cityCode);
        }
    }, [])

    const updateCityPromotion = useCallback((cityCode) => {
        fetchAndUpdateCityPromotion(cityCode)
    }, [fetchAndUpdateCityPromotion])


    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <LeftContainer cityInformation={cityInformation} touristSpots={touristSpots} updateCityPromotion={updateCityPromotion} />
                <RightContainer updateCityPromotion={updateCityPromotion} />
            </div>
        </div>
    )
}

export default Homepage;