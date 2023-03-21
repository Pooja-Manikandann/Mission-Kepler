import React from "react";
import styles from "./CartNavbar.module.scss"

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

export default CartNavbar;