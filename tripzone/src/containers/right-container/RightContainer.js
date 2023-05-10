import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import styles from "./RightContainer.module.scss"
import TripForm from '../trip-form/TripForm';
import AvailableFlights from '../available-flights/AvailableFlights';
import BookFlight from '../book-flight/BookFlight';
import { isEmpty } from "lodash"
import useInput from '../../hooks/useInput';
import getAvailableFlights from '../../services/getAvailableFlights';
import { NOT_SELECTED } from '../../constants/appConstants.constant';
import AppContext from '../../context/appContext';


const RightContainer = (props) => {
    const [flightItem, setFlightItem] = useState({})
    const [availableFlights, setAvailableFlights] = useState([]);
    // const [showFlights, setShowFlights] = useState(false);

    const { updateCityPromotion } = props;

    const fetchFlight = async (source, destination) => {
        const flightResponse = await getAvailableFlights(source, destination);
        setAvailableFlights(flightResponse);
        setFlightItem({});
    }

    // useEffect(() => {
    //     updateCityPromotion(destination)
    // }, [destination, updateCityPromotion])

    return (
        <div className={styles.rightWrapper}>
            <TripForm fetchFlight={fetchFlight} />
            <AvailableFlights availableFlights={availableFlights} bookFlight={setFlightItem} />
            {!isEmpty(flightItem) &&
                <BookFlight flightDetails={flightItem} />
            }
        </div>
    )
}

export default RightContainer;