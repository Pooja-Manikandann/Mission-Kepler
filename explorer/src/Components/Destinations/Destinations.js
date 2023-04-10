import React from "react";
import DestinationCard from "../DestinationCard/DestinationCard"
import styles from "./Destinations.module.scss"
import PropTypes from "prop-types"
import { DESTINATIONS_CAPTION, DESTINATIONS_TITLE } from "../../Constants/DestinationConstants";
import Title from "../Title/Title";

const Destinations = (props) => {
    const { places } = props;
    return (

        <div className={styles.destinationsWrapper}>
            <div className={styles.destinationsTitleWrapper}>
                <Title title={DESTINATIONS_TITLE} caption={DESTINATIONS_CAPTION} />
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
    places: PropTypes.arrayOf(PropTypes.shape({
        caption: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.string,
        place: PropTypes.string
    })),
}

Destinations.defaultProps = {
    places: [{
        caption: "",
        description: "",
        id: "",
        place: ""
    }]
}

export default Destinations;