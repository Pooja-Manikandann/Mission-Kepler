import React from "react";
import "./Dropdown.scss";
import PropTypes from "prop-types"

const Dropdown = (props) => {
    const { places, className, onChange, value, id } = props;

    return (
        <select id={id} className={`select ${className}`} value={value} onChange={onChange}>
            <option id="Choose" value="Choose" selected>Choose</option>
            {places.map((place) => {
                return <option key={place.id} id={place.id}>{place.place}</option>
            })}
        </select>

    )
}

Dropdown.propTypes = {
    places: PropTypes.arrayOf(PropTypes.shape({
        caption: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.string,
        place: PropTypes.string
    })),
    className: PropTypes.string,
    onChange: PropTypes.func
}

Dropdown.defaultProps = {
    places: [{
        caption: "",
        description: "",
        id: "",
        place: ""
    }],
    className: "",
    onChange: () => { },
    value: "",
    id: ""
}

export default Dropdown;