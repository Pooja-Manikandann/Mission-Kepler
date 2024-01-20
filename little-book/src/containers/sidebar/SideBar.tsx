import React from 'react'
import Logo from '../../components/Logo/Logo'
import  Filters from '../../components/Filters/Filters'
import Menu  from '../../components/Menu/Menu'
import styles from './SideBar.module.scss';

export const SideBar = () => {
  return (
    <div className={styles.sidebarWrapper}>
        <div><Logo /></div>
        <div>
            <h3 className={styles.filterTitle}>FILTER</h3>
            <Filters />
        </div>
        <div>
            <Menu />
        </div>
    </div>
  )
}
