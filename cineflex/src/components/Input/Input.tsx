import styles from './Input.module.scss';

type Props= {
    label?: string,
    type: string,
    register: Function,
    name: string,
    variant: string,
    theme?: string,
    placeHolder?:string,
    border?: string,
}

const defaultProps = {
    label: '',
    type: '',
    register: () => {},
    name: '',
    variant: '',
    theme: '',
    placeHolder:'',
    border: '',
}

/**
 * @description function to render label and input component
 * @param param required props to render label and input component
 * @returns label and input component with the expected props
 */
const Input = ({label, type, name, register, variant, theme, placeHolder, border}: Props) => {
  const customStyle = `${styles.inputWrapper} ${variant? styles[variant] : ''}`

  const inputCustomStyle = `${theme? styles['theme'+theme] : ''} ${border? styles['border'+border] : ''}`

  return (
    <div className={customStyle}>
        <label htmlFor={name} className={inputCustomStyle}>{label}</label>
        <input type={type} {...register(name)} id={name} className={inputCustomStyle} placeholder={placeHolder} maxLength={type==='tel' && 10} />
    </div>
  )
}

Input.defaultProps = defaultProps;

export default Input;