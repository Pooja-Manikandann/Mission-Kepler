import React from "react";
import PropTypes from "prop-types"
import { Link, NavLink } from "react-router-dom"
import styles from "./Navbar.module.scss"

const Navbar = (props) => {
    const { menuItems, handleClick, isHeaderNav } = props;

    /**
     * function that triggers handle click in parent but prevent default function expect for nav in header
     * @param {object} event - click event
     */
    function updateActiveMenu(event) {
        if (!isHeaderNav) {
            event.preventDefault();
        }
        handleClick(event.target.id);
    }
    return (
        <div className={styles.navbarWrapper}>
            {/* Iterate through the items and return Link tag onclick navigate to respective page */}
            {menuItems.map((item) => {
                return (
                    // <nav className={`${styles.navItem} ${!isHeaderNav && styles.paddingZero}  ${(isHeaderNav && activeMenu === item.id) ? styles.boldBorderBottom : ""} ${(!isHeaderNav && activeMenu === item.id) ? styles.thinBorderBottom : ""} ${(!isHeaderNav && activeMenu !== item.id) ? styles.nonactive : ""}`} key={item.id}>
                    // <NavLink className={(state) => state.isActive ? `${styles.navItem} ${styles.boldBorderBottom}` : `${styles.navItem}`} key={item.id} to={`/categories/${item.id}`} id={item.id} onClick={updateActiveMenu}>{item.id}</NavLink>
                    <NavLink className={(state) => `${styles.navItem} ${!isHeaderNav && styles.paddingZero}  ${(isHeaderNav && state.isActive) ? styles.boldBorderBottom : ""} ${(!isHeaderNav && state.isActive) ? styles.thinBorderBottom : ""} ${(!isHeaderNav && state.isActive) ? styles.nonactive : ""}`} id={item.id} onClick={updateActiveMenu}>{item.id}</NavLink>
                    // </nav>
                )

            })}
        </div>
    )
}

Navbar.defaultProps = {
    menuItems: {
        id: "",
        category: "",
        description: "",
        photo: ""
    },
    isHeaderNav: true,
    handleClick: () => { },
    activeMenu: ""
}

Navbar.propTypes = {
    menuItems: PropTypes.array.isRequired,
    isHeaderNav: PropTypes.bool,
    handleClick: PropTypes.func,
    activeMenu: PropTypes.string
}

export default Navbar;