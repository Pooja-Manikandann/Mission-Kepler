import React from 'react';
import styles from "./Dropdown.module.scss"

const Dropdown = (props) => {

    const { label, options, bindValue } = props;

    return (
        <div className={styles.dropdownWrapper}>
            <label>{label}</label>
            <select className={styles.dropdown} {...bindValue}>
                <option hidden>Select</option>
                {options.map((option) => (
                    <option value={option.code} key={option.code}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown;