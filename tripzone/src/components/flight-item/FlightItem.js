import React from "react";
import Button from "../button/Button";
import airIndia from "../../assets/air-india.png"
import styles from "./FlightItem.module.scss"

const FlightItem = (props) => {
    const { flightItem } = props;
    return (
        <div className={styles.flightItemWrapper}>
            <div className={styles.imageWrapper}>
                <img src={airIndia} alt="" />
            </div>
            <div className={styles.flightDetailsWrapper}>
                <h5>{flightItem.flightName}</h5>
                <h6>{flightItem.src} - {flightItem.dest}</h6>
                <span>$ {flightItem.price}</span>
            </div>
            <div className={styles.bookButtonWrapper}>
                <Button label="Book" variant="small" />
            </div>
        </div>
    )
}

export default FlightItem;