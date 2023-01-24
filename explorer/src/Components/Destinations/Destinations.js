import React from "react";
import DestinationCard from "../DestinationCard/DestinationCard"
import styles from "./Destinations.module.scss"
import PropTypes from "prop-types"
import { DESTINATIONS_CAPTION, DESTINATIONS_TITLE } from "../../Constants/DestinationConstants";

const Destinations = (props) => {
    const { places } = props;
    return (

        <div className={styles.destinationsWrapper}>
            <div className={styles.destinationsTitleWrapper}>
                <p className={styles.title}>{DESTINATIONS_TITLE}</p>
                <p className={styles.caption}>{DESTINATIONS_CAPTION}</p>
            </div>
            <div className={styles.destinationsCardWrapper}>
                {places.map((place) => {
                    return <DestinationCard place={place} />
                })}
            </div>
        </div>

    )
}

Destinations.propTypes = {
    places: PropTypes.object
}

export default Destinations;