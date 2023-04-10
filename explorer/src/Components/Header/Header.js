import React from "react";
// import Logo from "../../Assets/logo.png"
import { Link } from "react-router-dom"
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <img src="/Assets/logo.png" alt="Logo" width="150" />
            <div className={styles.navContainer}>
                <Link to="/">Hotels</Link>
                <Link to="/">Bike Rentals</Link>
                <Link to="/">Restaurants</Link>
            </div>
        </div>
    )
}

export default Header;