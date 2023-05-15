import React from "react";
import FlightItem from "../../components/flight-item/FlightItem";
import styles from "./AvailableFlights.module.scss"
import FLIGHT_NOT_AVAILABLE from "../../assets/not_available.png"
import { NOT_SELECTED } from "../../constants/appConstants.constant";

const AvailableFlights = (props) => {
    const { bookFlight, availableFlights } = props;
    let element;

    console.log("available flights");

    if (!availableFlights.length) {
        element = <div className={styles.notAvailableWrapper}>
            <img src={FLIGHT_NOT_AVAILABLE} alt="not available" />
            <h5 className={styles.warning}>Opps!!No flights currently available for the selected locations</h5>
        </div>
    }
    else if (availableFlights && availableFlights.length) {
        element = <div>
            <h2>Available Flights</h2>
            <div>
                {availableFlights.map((flightItem, index) => (
                    <FlightItem flightItem={flightItem} key={index} bookFlight={bookFlight} />
                ))}
            </div>
        </div>
    }

    return (
        <div className={styles.availableFlightsWrapper}>
            {element}
        </div>
    )
}

export default AvailableFlights;