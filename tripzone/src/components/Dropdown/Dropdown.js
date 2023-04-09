import React from 'react';

const Dropdown = (props) => {

    const { label, options, value, bindValue } = props;

    return (
        <React.Fragment>
            <label>{label}</label>
            <select value={value} {...bindValue}>
                <option>Select</option>
                {options.map((option) => (
                    <option value={option.code}>{option.name}</option>
                ))}
            </select>
        </React.Fragment>
    )
}

export default Dropdown;