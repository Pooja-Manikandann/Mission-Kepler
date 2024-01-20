import React from 'react'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
        <a className={styles.logo} href='/'>
            <span>Little</span>
            <span>Book</span>
        </a>
    </div>
  )
}

export default Logo;