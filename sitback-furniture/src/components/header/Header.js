import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.scss"
import PropTypes from "prop-types"
import { PROFILE_USER } from "../../constants/AppConstants";

const Header = (props) => {
    const { categories, setCategory, category } = props;


    /**
     * function to update the category prop based on the user selection 
     * @param {string} id - The id of the selected category
     */
    function navigateToCategory(id) {
        setCategory(id);
    }

    return (
        <header className={styles.headerWrapper}>
            {/* Link to return to home page */}
            <a href="/" className={styles.home}>SITBACK</a>

            {/* navbar in header to navigate to shopping page */}
            <Navbar menuItems={categories} handleClick={navigateToCategory} activeMenu={category} isHeaderNav={true} />

            {/* User profile static dropdown */}
            <div className={styles.profileWrapper}>
                <p>{PROFILE_USER}</p>
                <AiFillCaretDown />
            </div>
        </header>
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