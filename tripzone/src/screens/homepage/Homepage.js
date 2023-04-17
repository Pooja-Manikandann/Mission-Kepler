import React, { useEffect, useState } from 'react'
import AvailableFlights from '../../containers/available-flights/AvailableFlights';
import CityPromotion from '../../containers/city-promotion/CityPromotion';
import GlobalPromotion from '../../containers/global-promotion/GlobalPromotion';
import Header from '../../containers/header/Header';
import Search from '../../containers/search/Search';
import TripForm from '../../containers/trip-form/TripForm';
import useInput from '../../hooks/useInput';
import getCityInformation from '../../services/getCityInformation';
import getTouristSpots from '../../services/getTouristSpots';
import styles from "./Homepage.module.scss"
import { ALL, NOT_SELECTED } from '../../constants/appConstants';
import BookFlight from '../../containers/book-flight/BookFlight';
import { isEmpty } from "lodash"

const Homepage = () => {
    const [availableFlights, setAvailableFlights] = useState(null)
    const [cityInformation, setCityInformation] = useState([])
    const [touristSpots, setTouristSpots] = useState([]);
    const [globalTouristSpots, setGlobalTouristSpots] = useState([]);
    const [source, bindSource] = useInput("");
    const [destination, bindDestination] = useInput("");
    const [search, bindSearch] = useInput("");
    const [flightItem, setFlightItem] = useState({})

    useEffect(() => {
        async function updateGlobalPromotion() {
            let response = await getTouristSpots(ALL);
            setGlobalTouristSpots(response);
        }
        updateGlobalPromotion();
    }, [])


    async function updateCityInformation(destination) {
        let response = await getCityInformation(destination);
        setCityInformation(response);
    }

    async function updateTouristSpotInformation(destination) {
        let response = await getTouristSpots(destination);
        setTouristSpots(response);
    }
    function fetchAndUpdateCityPromotion(destination) {
        if (destination) {
            updateCityInformation(destination);
            updateTouristSpotInformation(destination);
        }
    }

    useEffect(() => {
        fetchAndUpdateCityPromotion(search.toUpperCase())
    }, [search])

    useEffect(() => {
        fetchAndUpdateCityPromotion(destination)
    }, [destination])

    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.leftWrapper}>
                    <Search search={search} bindSearch={bindSearch} />
                    {(search || destination) ?
                        <CityPromotion cityInformation={cityInformation} touristSpots={touristSpots} /> : <></>}
                    <GlobalPromotion touristSpots={globalTouristSpots} />
                </div>
                <div className={styles.rightWrapper}>
                    <TripForm source={source} bindSource={bindSource} destination={destination} bindDestination={bindDestination} setAvailableFlights={setAvailableFlights} />
                    <AvailableFlights availableFlights={(source && destination) ? availableFlights : NOT_SELECTED} bookFlight={setFlightItem} />
                    {!isEmpty(flightItem) &&
                        <BookFlight flightDetails={flightItem} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Homepage;