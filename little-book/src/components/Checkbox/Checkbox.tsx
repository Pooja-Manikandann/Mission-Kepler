import React from 'react';
import { checkBoxProps } from '../../modals/modals';
import styles from './CheckBox.module.scss';

export const defaultProps = {
  id: '2',
  name: 'test',
  value: true,
  label: 'test checkbox',
  onChange: () => { },
}

const Checkbox = (props:checkBoxProps) => {
    const {id, name, value, label, onChange } = props;
  return (
    <div className={styles.checkboxContainer}>
        <input data-testid='checkbox' id={id} type="checkbox" name={name} checked={value} onChange={() => onChange(id)}  />
        <span className={styles.checkmark}></span>
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

Checkbox.defaultProps = defaultProps;

export default Checkbox;