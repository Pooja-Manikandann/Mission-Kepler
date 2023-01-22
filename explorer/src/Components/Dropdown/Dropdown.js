import React from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = (props) => {
    const { places } = props;


    console.log("places", places)
    return (
        <select className={styles.dropdownSelect}>
            <option id="Choose" value="Choose">Choose</option>
            {places.map((place) => {
                return <option key={place.id} id={place.id}>{place.place}</option>
            })}
        </select>

    )
}

export default Dropdown;