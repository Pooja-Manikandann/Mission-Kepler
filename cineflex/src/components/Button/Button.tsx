import styles from './Button.module.scss'

type Props = {
  label: string,
  size?: string,
  disabled: boolean,
  color: string,
}

const defaultProps = {
  label: 'button',
  size: '',
  disabled: false,
  color: ''
}

/**
 * @description function to render button component 
 * @param param required props to render button
 * @returns button element with the expected props
 */
const Button = ({ label, size, disabled, color }: Props) => {
  const className = `${styles.cineflexButton} ${size ? styles[size] : ''} ${disabled ? styles.disabled : ''} ${color ? styles[color] : ''}`
  return (
    <button className={className} disabled={disabled}>{label}</button>
  )
}

Button.defaultProps = defaultProps;

export default Button;