import React from "react";
import styles from "./CartNavbar.module.scss"
import { PropTypes } from "prop-types";

const CartNavbar = (props) => {
    const { updateMenu, menuItems, activeCartMenu } = props;
    return (
        <nav className={styles.cartNavbar}>
            {menuItems.map((menuItem) => (
                <span className={`${styles.navItem} ${activeCartMenu === menuItem.id && styles.active}`} onClick={() => updateMenu(menuItem.id)} key={menuItem.id}>{menuItem.id}</span>
            ))}
        </nav>
    )
}

CartNavbar.defaultProps = {
    updateMenu: () => { },
    menuItems: [{ id: "" }],
    activeCartMenu: ""
}

CartNavbar.propType = {
    updateMenu: PropTypes.func,
    menuItems: PropTypes.array,
    activeCartMenu: PropTypes.string
}

export default CartNavbar;