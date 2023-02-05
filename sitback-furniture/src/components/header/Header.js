import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.scss"
import PropTypes from "prop-types"

const Header = (props) => {
    const { categories, setCategory, category } = props;


    function navigateToCategory(id) {
        setCategory(id);
    }

    return (
        <div className={styles.headerWrapper}>
            <a href="/" className={styles.home}>SITBACK</a>

            <Navbar menuItems={categories} handleClick={navigateToCategory} activeMenu={category} isHeaderNav={true} />

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
    },
    setCategory: () => { },
    category: ""
}

Header.propTypes = {
    categories: PropTypes.array.isRequired,
    setCategory: PropTypes.func,
    category: PropTypes.string,
}

export default Header;