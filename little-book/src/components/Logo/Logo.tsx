import React from 'react'
import styles from './Logo.module.scss'
import { useSelector } from 'react-redux';

const Logo = () => {
  const isDarkTheme = useSelector((state:any) => state.theme.isDarkTheme);
  return (
    <div className={`${styles.logoWrapper} ${isDarkTheme && styles.darkTheme}`}>
        <a className={styles.logo} href='/'>
            <span>Little</span>
            <span>Book</span>
        </a>
    </div>
  )
}

export default Logo;