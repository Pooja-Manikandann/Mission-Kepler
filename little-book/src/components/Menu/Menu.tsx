import React from 'react';
import styles from './Menu.module.scss';
import { useDispatch } from 'react-redux';
import { themeAction } from 'src/store/themeSlice';
import { modalAction } from 'src/store/modalSlice';
import Gallery from '../../containers/Gallery/Gallery';

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

    const dispatch = useDispatch();

    const header = (<h2>Members</h2>)
    const content = (<Gallery />)

    /**
     * @description handles menu click and redirects to functions based on what menu item clicked
     * @param key has the value to identify ehat menu item is clicked
     */
    const handleMenuClick = (key: string) => {
        switch(key) {
            case 'members':
                // show memnbers function
                dispatch(modalAction.updateModalProprties({header, content, showConfirmation: false}))
                break;
            case 'darkTheme':
                dispatch(themeAction.toggleDarkTheme())
                // chnage theme
                break;
            default: break;
        }
    }

  return (
    <menu className={styles.menuWrapper}>
        {menuItemsData.map((items, index)=>(
            <li key={index} onClick={() => handleMenuClick(items.value)}>{items.label}</li>
        ))}
    </menu>
  )
}

export default Menu;