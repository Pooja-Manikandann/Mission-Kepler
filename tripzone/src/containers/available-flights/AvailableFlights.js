import React from "react";
import FlightItem from "../../components/flight-item/FlightItem";
import styles from "./AvailableFlights.module.scss"

const AvailableFlights = (props) => {
    const { availableFlights } = props;
    return (
        <div className={styles.availableFlightsWrapper}>
            <h2>Available Flights</h2>
            <div>
                {availableFlights.map((flightItem, index) => (
                    <FlightItem flightItem={flightItem} key={index} />
                ))}
            </div>

        </div>
    )
}

export default AvailableFlights;