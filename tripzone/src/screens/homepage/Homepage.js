import React, { useCallback, useContext, useEffect, useState } from 'react'
import Header from '../../containers/header/Header';
import getCityInformation from '../../services/getCityInformation';
import getTouristSpots from '../../services/getTouristSpots';
import styles from "./Homepage.module.scss"
import LeftContainer from '../../containers/left-container/LeftContainer';
import RightContainer from '../../containers/right-container/RightContainer';
import LoginContext from '../../context/loginContext';
import loginInUser from '../../services/loginInUser';

const Homepage = () => {

    const { user, setUser } = useContext(LoginContext);
    const [cityInformation, setCityInformation] = useState({})
    const [touristSpots, setTouristSpots] = useState({});

    async function updateCityInformation(destination) {
        let response = await getCityInformation(destination);
        setCityInformation(response);
    }
    console.log("login user", user)

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

    const loginUser = useCallback(async (userName, password) => {
        console.log("inside function call")
        let userResponse = await loginInUser(userName, password);
        console.log("vuserResponse", userResponse)
        setUser(userResponse);
    }, [])

    useEffect(() => {
        console.log("inside useeffect")
        loginUser("jim", "jim123");
    }, [loginUser])


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