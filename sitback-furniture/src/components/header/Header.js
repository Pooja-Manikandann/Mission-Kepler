import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.scss"
import PropTypes from "prop-types"

const Header = (props) => {
    const { categories } = props
    return (
        <div className={styles.headerWrapper}>
            <a href="/" className={styles.home}>SITBACK</a>

            <Navbar categories={categories} />

            <div className={styles.profileWrapper}>
                <p>Nijin Vinodan</p>
                <AiFillCaretDown />
            </div>
        </div>
    )
}

Header.defaultProps = {
    categories: {
        id: "",
        category: "",
        description: "",
        photo: ""
    }
}

Header.propTypes = {
    categories: PropTypes.array.isRequired
}

export default Header;