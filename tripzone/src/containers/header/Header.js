import React from 'react';
import logo from "../../assets/logo.png"
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt='logo' className={styles.logo} />
        </header>
    )
}
export default Header;