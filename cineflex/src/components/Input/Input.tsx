import React from 'react';
import styles from './Input.module.scss';
import { inputProps } from '../../modals/modal';

export const defaultProps = {
    label: '',
    type: '',
    register: () => {},
    name: '',
    variant: '',
    theme: '',
    placeHolder: '',
    border: '',
    maxLength: 100,
    error: {},
};

/**
 * @description function to render label and input component
 * @param param required props to render label and input component
 * @returns label and input component with the expected props
 */
const Input = ({
    label,
    type,
    name,
    register,
    variant,
    theme,
    placeHolder,
    border,
    maxLength,
    error,
}: inputProps) => {
    const customStyle = `${styles.inputWrapper} ${variant ? styles[variant] : ''}`;

    const inputCustomStyle = `${theme ? styles['theme' + theme] : ''} ${
        border ? styles['border' + border] : ''
    }`;

    return (
        <div className={customStyle}>
            <label htmlFor={name} className={inputCustomStyle}>
                {label}
            </label>
            <div className={styles.inputWrapper}>
                <input
                    type={type}
                    {...register}
                    id={name}
                    className={inputCustomStyle}
                    placeholder={placeHolder}
                    maxLength={maxLength}
                />
                {error && error[name] && (
                    <p className={styles.inputError}>{error[name].message}</p>
                )}
            </div>
        </div>
    );
};

Input.defaultProps = defaultProps;

export default Input;
