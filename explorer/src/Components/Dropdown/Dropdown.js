import React from "react";
import "./Dropdown.scss";
import PropTypes from "prop-types"

const Dropdown = (props) => {
    const { places, className, onChange } = props;

    return (
        <select className={className} onChange={onChange}>
            <option id="Choose" value="Choose">Choose</option>
            {places.map((place) => {
                return <option key={place.id} id={place.id}>{place.place}</option>
            })}
        </select>

    )
}

Dropdown.propTypes = {
    places: PropTypes.object,
    className: PropTypes.string,
    onChange: PropTypes.func
}

export default Dropdown;