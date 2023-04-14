import React, { useEffect, useState } from 'react'
import AvailableFlights from '../../containers/available-flights/AvailableFlights';
import CityPromotion from '../../containers/city-promotion/CityPromotion';
import Header from '../../containers/header/Header';
import Search from '../../containers/search/Search';
import TripForm from '../../containers/trip-form/TripForm';
import useInput from '../../hooks/useInput';
import getCityInformation from '../../services/getCityInformation';
import getTouristSpots from '../../services/getTouristSpots';
import styles from "./Homepage.module.scss"

const Homepage = () => {
    const [availableFlights, setAvailableFlights] = useState([])
    const [cityInformation, setCityInformation] = useState([])
    const [touristSpots, setTouristSpots] = useState([]);
    const [source, bindSource] = useInput("")

    const [destination, bindDestination] = useInput("");

    useEffect(() => {
        console.log("destination", destination)


        async function updateCityInformation() {
            let response = await getCityInformation(destination);
            setCityInformation(response);
        }

        async function updateTouristSpotInformation() {
            let response = await getTouristSpots(destination);
            setTouristSpots(response);
        }

        updateCityInformation();
        updateTouristSpotInformation();
    }, [destination])

    console.log("touristSpots", touristSpots)
    console.log("availableFlight", availableFlights)

    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.leftWrapper}>
                    <Search />
                    <CityPromotion cityInformation={cityInformation} touristSpots={touristSpots} />
                </div>
                <div className={styles.rightWrapper}>
                    <TripForm source={source} bindSource={bindSource} destination={destination} bindDestination={bindDestination} setAvailableFlights={setAvailableFlights} />
                    <AvailableFlights availableFlights={availableFlights} />
                </div>
            </div>
        </div>
    )
}

export default Homepage;