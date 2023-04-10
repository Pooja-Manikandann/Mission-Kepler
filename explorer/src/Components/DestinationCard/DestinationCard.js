import React from "react";
import Button from "../Button/Button";
import styles from "./DestinationCard.module.scss"
// import Pollachi from "../../Assets/pollachi.png"
import PropTypes from "prop-types"


const DestinationCard = (props) => {
    const { place } = props;
    let imageUrl = `../Assets/${place.id}.png`

    return (
        <div className={`card ${styles.destinationCard}`} >
            <img src={(imageUrl)} alt="destination cover" className={styles.detinationCoverImage} />
            <p className={styles.destinationCaption}>{place.caption}</p>
            <h4 className={styles.destionationName}>{place.place}</h4>
            <p className={styles.destionationDescription}>{place.description}</p>
            <Button label="READ MORE" className="destionationReadMore" />
        </div>
    )
}

DestinationCard.propTypes = {
    place: PropTypes.object,
}

DestinationCard.defaultProps = {
    place: {},
}

export default DestinationCard;