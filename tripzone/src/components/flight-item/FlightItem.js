import React from "react";
import Button from "../button/Button";
import airIndia from "../../assets/air-india.png"
import styles from "./FlightItem.module.scss"
import { BOOK, SMALL_VARIANT } from "../../constants/appConstants";

const FlightItem = (props) => {
    const { flightItem, bookFlight } = props;

    console.log("flightItem", flightItem)

    function book() {
        bookFlight(flightItem)
    }
    return (
        <div className={styles.flightItemWrapper}>
            <div className={styles.imageWrapper}>
                <img src={airIndia} alt="flight logo" />
            </div>
            <div className={styles.flightDetailsWrapper}>
                <h5>{flightItem.flightName}</h5>
                <h6>{flightItem.src} - {flightItem.dest}</h6>
                <span>$ {flightItem.price}</span>
            </div>
            <div className={styles.bookButtonWrapper}>
                <Button label={BOOK} variant={SMALL_VARIANT} onClick={book} />
            </div>
        </div>
    )
}

export default FlightItem;