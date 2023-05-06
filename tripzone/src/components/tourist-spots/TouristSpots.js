import React from "react";
import Polaroid from "../polaroid/Polaroid";
import styles from "./TouristSpots.module.scss"

const TouristSpots = (props) => {
    const { touristSpots } = props;
    console.log("touristSpots", touristSpots)
    return (
        <div className={styles.polaroidsContainer}>
            {touristSpots.map((touristSpot, index) => (
                <Polaroid details={touristSpot} key={index} />
            ))}
        </div>
    )
}

export default TouristSpots;