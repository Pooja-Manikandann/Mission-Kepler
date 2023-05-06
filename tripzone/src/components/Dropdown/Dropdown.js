import React from 'react';
import styles from "./Dropdown.module.scss"

const Dropdown = (props) => {

    const { label, options, value, bindValue, onChange } = props;

    return (
        <div className={styles.dropdownWrapper}>
            <label>{label}</label>
            <select className={styles.dropdown} value={value} {...bindValue} onSelect={onChange}>
                <option>Select</option>
                {options.map((option) => (
                    <option value={option.code} key={option.code}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

Dropdown.defaultProps = {
    onChange: () => { }
}

export default Dropdown;