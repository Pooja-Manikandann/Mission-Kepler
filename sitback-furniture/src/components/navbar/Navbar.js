import React from "react";
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.scss"

const Navbar = (props) => {
    const { menuItems } = props;

    return (
        <div className={styles.navbarWrapper}>
            {/* Iterate through the items and return Link tag onclick navigate to respective page */}
            {menuItems.map((item) => {
                return (
                    <NavLink className={(state) => `${styles.navItem} ${state.isActive && styles.boldBorderBottom}`} key={item.id} to={`/categories/${item.id}`}>{item.id}</NavLink>
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
}

Navbar.propTypes = {
    menuItems: PropTypes.array.isRequired,
}

export default Navbar;