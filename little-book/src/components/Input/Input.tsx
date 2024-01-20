import React from 'react'
import { inputProps } from '../../modals/modals';
import styles from './Input.module.scss';

const Input = (props: inputProps) => {
    const {type, placeholder} = props;

  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  )
}

export default Input;