import React, { useState } from 'react'
import styles from "./RightContainer.module.scss"
import TripForm from '../trip-form/TripForm';
import AvailableFlights from '../available-flights/AvailableFlights';
import BookFlight from '../book-flight/BookFlight';
import { isEmpty } from "lodash"
import getAvailableFlights from '../../services/getAvailableFlights';


const RightContainer = () => {
    const [flightItem, setFlightItem] = useState({})
    const [availableFlights, setAvailableFlights] = useState([]);
    const [showFlights, setShowFlights] = useState(false);

    console.log("Container - Rightcontainer");

    const fetchFlight = async (source, destination) => {
        const flightResponse = await getAvailableFlights(source, destination);
        setAvailableFlights(flightResponse);
        setShowFlights(true);
        setFlightItem({});
    }

    return (
        <div className={styles.rightWrapper}>

            <TripForm fetchFlight={fetchFlight} />
            {showFlights &&
                <AvailableFlights availableFlights={availableFlights} bookFlight={setFlightItem} />}
            {!isEmpty(flightItem) &&
                <BookFlight flightDetails={flightItem} />
            }
        </div>
    )
}

export default RightContainer;