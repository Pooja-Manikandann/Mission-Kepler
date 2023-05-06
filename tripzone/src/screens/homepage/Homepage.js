import React, { useCallback, useEffect, useMemo, useState } from 'react'
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
import { NOT_SELECTED } from '../../constants/appConstants';
import BookFlight from '../../containers/book-flight/BookFlight';
import { isEmpty } from "lodash"
import getAvailableFlights from '../../services/getAvailableFlights';

const Homepage = () => {
    const [availableFlights, setAvailableFlights] = useState(null)
    const [cityInformation, setCityInformation] = useState({})
    const [touristSpots, setTouristSpots] = useState({});
    const [source, bindSource] = useInput("");
    const [destination, bindDestination] = useInput("");
    const [search, bindSearch] = useInput("");
    const [flightItem, setFlightItem] = useState({})

    const PureSearch = React.memo(Search);

    console.log("searchhhh**", search)

    async function updateCityInformation(destination) {
        console.log("updatecityinfo")
        let response = await getCityInformation(destination);
        setCityInformation(response);
    }

    async function updateTouristSpotInformation(destination) {
        console.log("update tourit info")
        let response = await getTouristSpots(destination);
        setTouristSpots(response);
    }
    const fetchAndUpdateCityPromotion = useCallback((destination) => {
        console.log("destina", destination)
        if (destination) {
            updateCityInformation(destination);
            updateTouristSpotInformation(destination);
        }
    }, [])

    let memoizedCityInfo = useMemo(() => {
        return cityInformation;
    }, [cityInformation])

    let memoizedTouristSpots = useMemo(() => {
        console.log("tourist sot")
        return touristSpots;
    }, [touristSpots])

    console.log("memoizedTouristSpots", memoizedTouristSpots)

    // useEffect(() => {
    //     fetchAndUpdateCityPromotion(search.toUpperCase())
    // }, [search, fetchAndUpdateCityPromotion])

    useEffect(() => {
        console.log("inside usefeevy")
        fetchAndUpdateCityPromotion(destination)
    }, [destination, fetchAndUpdateCityPromotion])

    const handleChange = useMemo(() => {
        fetchAndUpdateCityPromotion(search.toUpperCase())
    }, [search, fetchAndUpdateCityPromotion])
    const handleDropdownChange = useMemo(() => {
        fetchAndUpdateCityPromotion(destination)
    }, [destination, fetchAndUpdateCityPromotion])

    const updateAvailableFlights = async (e) => {
        e.preventDefault();
        console.log("inside function", source, destination)
        const flightResponse = await getAvailableFlights(source, destination)
        setAvailableFlights(flightResponse);
        console.log("flightResponse", flightResponse)
    }

    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.leftWrapper}>
                    <Search search={search} bindSearch={bindSearch} onChange={handleChange} />
                    {(search || destination) ?
                        <CityPromotion cityInformation={memoizedCityInfo} touristSpots={memoizedTouristSpots} /> : <></>}
                    <GlobalPromotion />
                </div>
                <div className={styles.rightWrapper}>
                    <TripForm source={source} bindSource={bindSource} destination={destination} bindDestination={bindDestination} onChange={handleDropdownChange} onSearch={updateAvailableFlights} />
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