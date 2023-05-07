import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from "./RightContainer.module.scss"
import TripForm from '../trip-form/TripForm';
import AvailableFlights from '../available-flights/AvailableFlights';
import BookFlight from '../book-flight/BookFlight';
import { isEmpty } from "lodash"
import useInput from '../../hooks/useInput';
import getAvailableFlights from '../../services/getAvailableFlights';
import { NOT_SELECTED } from '../../constants/appConstants';


const RightContainer = (props) => {
    const [source, bindSource] = useInput("");
    const [destination, bindDestination] = useInput("");
    const [availableFlights, setAvailableFlights] = useState(null)
    const [flightItem, setFlightItem] = useState({})
    // const [showFlights, setShowFlights] = useState(false);


    const { updateCityPromotion } = props;

    useEffect(() => {
        updateCityPromotion(destination)
    }, [destination, updateCityPromotion])

    const updateAvailableFlights = async (e) => {
        e.preventDefault();
        console.log("inside function", source, destination)
        const flightResponse = await getAvailableFlights(source, destination)
        setAvailableFlights(flightResponse);
        console.log("flightResponse", flightResponse)
    }

    // const updateFlights = useCallback(async () => {
    //     const flightResponse = await getAvailableFlights(source, destination)
    //     console.log("flightResponse", flightResponse)
    //     return flightResponse;
    // }, [destination, source])

    // function showAvaialbleFlights(e) {
    //     e.preventDefault();
    //     setShowFlights(true)
    // }

    // const flights = useMemo(async () => { await updateFlights() }, [updateFlights])

    // console.log("flights collected", flights)

    return (
        <div className={styles.rightWrapper}>
            <TripForm source={source} bindSource={bindSource} destination={destination} bindDestination={bindDestination} onSearch={updateAvailableFlights} />
            <AvailableFlights availableFlights={(source && destination) ? availableFlights : NOT_SELECTED} bookFlight={setFlightItem} />
            {!isEmpty(flightItem) &&
                <BookFlight flightDetails={flightItem} />
            }
        </div>
    )
}

export default RightContainer;