import React from 'react';
import styles from './Menu.module.scss';

const menuItemsData = [
    {
        label: 'View Members',
        value: 'members'
    },
    {
        label: 'Switch to Dark mode',
        value: 'darkTheme',
    }
]

const Menu = () => {
    /**
     * @description handles menu click and redirects to functions based on what menu item clicked
     * @param key has the value to identify ehat menu item is clicked
     */
    const handleMenuClick = (key: string) => {
        switch(key) {
            case 'members':
                // show memnbers function
                break;
            case 'darkTheme':
                // chnage theme
                break;
            default: break;
        }
    }

  return (
    <menu className={styles.menuWrapper}>
        {menuItemsData.map((items)=>(
            <li onClick={() => handleMenuClick(items.value)}>{items.label}</li>
        ))}
    </menu>
  )
}

export default Menu;