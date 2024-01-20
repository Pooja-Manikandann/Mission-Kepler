import React from 'react';
import { checkBoxProps } from '../../modals/modals';
import styles from './CheckBox.module.scss';

const Checkbox = (props:checkBoxProps) => {
    const {id, name, value, label, onChange } = props;
  return (
    <div className={styles.checkboxContainer}>
        <input id={id} type="checkbox" name={name} checked={value} onChange={() => onChange(id)}  />
        <span className={styles.checkmark}></span>
        <label htmlFor={id}>{label}</label>
    </div>
  )
}
export default Checkbox;