import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.scss"
// import { useParams } from "react-router-dom";

const Navbar = (props) => {
    const { menuItems, handleClick, activeMenu, isHeaderNav } = props;
    // const { category } = useParams();
    function updateActiveMenu(event) {
        if (!isHeaderNav) {
            event.preventDefault();
        }
        handleClick(event.target.id);
    }
    return (
        <div className={styles.navbarWrapper}>
            {menuItems.map((item) => {
                return (
                    <nav className={`${styles.navItem} ${!isHeaderNav && styles.paddingZero}  ${(isHeaderNav && activeMenu === item.id) ? styles.boldBorderBottom : ""} ${(!isHeaderNav && activeMenu === item.id) ? styles.thinBorderBottom : ""}`} key={item.id}>
                        <Link key={item.id} to={`/categories/${item.id}`} id={item.id} onClick={updateActiveMenu}>{item.id}</Link>
                    </nav>
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