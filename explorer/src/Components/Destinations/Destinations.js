import React from "react";
import DestinationCard from "../DestinationCard/DestinationCard"

const Destinations = (props) => {
    const { places } = props;
    return (

        <div>
            {places.map((place) => {
                return <DestinationCard place={place} />
            })}
        </div>

    )
}

export default Destinations;