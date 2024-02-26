import React, { useRef } from 'react'
import { inputProps } from '../../modals/modals';
import styles from './Input.module.scss';

const Input = (props: inputProps) => {
    const {type, variant, placeholder, handleEnter, maxlength, onChange, value, darkTheme} = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const handleKeyDown = (e: any) => {
      if (e.key === 'Enter') {
        handleEnter(inputRef?.current?.value);
      }
    }

    const handleInputChange = () => {
      onChange(inputRef?.current?.value);
    }

  return (
    <input data-testid='input' value={value} className={`${styles.input} ${styles[variant]} ${darkTheme? styles.darkTheme: ''}`} type={type} placeholder={placeholder} onChange={handleInputChange} ref={inputRef} onKeyDown={handleKeyDown} maxLength={maxlength} />
  )
}

export const defaultProps = {
  type: 'text',
  placeholder: '',
  handleEnter: () => { },
  maxLength: 100,
  value: 'test',
  onChange: () => { },
  variant: '',
}

Input.defaultProps = defaultProps;

export default Input;