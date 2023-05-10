import React, { useContext } from 'react';
import logo from "../../assets/logo.png"
import styles from "./Header.module.scss"
import LoginContext from '../../context/loginContext';

const Header = () => {
    console.log("header")

    const { user } = useContext(LoginContext);
    return (
        <header className={styles.header}>
            <img src={logo} alt='logo' className={styles.logo} />
            <div>
                <span>Hi,{user.name} </span>
            </div>
        </header>
    )
}
export default Header;