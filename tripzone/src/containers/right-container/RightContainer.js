import React, { useState } from 'react'
import styles from "./RightContainer.module.scss"
import TripForm from '../trip-form/TripForm';
import AvailableFlights from '../available-flights/AvailableFlights';
import BookFlight from '../book-flight/BookFlight';
import { isEmpty } from "lodash"
import getAvailableFlights from '../../services/getAvailableFlights';


const RightContainer = (props) => {
    const [flightItem, setFlightItem] = useState({})
    const [availableFlights, setAvailableFlights] = useState([]);
    const fetchFlight = async (source, destination) => {
        const flightResponse = await getAvailableFlights(source, destination);
        setAvailableFlights(flightResponse);
        setFlightItem({});
    }

    return (
        <div className={styles.rightWrapper}>

            <TripForm fetchFlight={fetchFlight} />
            {!isEmpty(availableFlights) &&
                <AvailableFlights availableFlights={availableFlights} bookFlight={setFlightItem} />}
            {!isEmpty(flightItem) &&
                <BookFlight flightDetails={flightItem} />
            }
        </div>
    )
}

export default RightContainer;