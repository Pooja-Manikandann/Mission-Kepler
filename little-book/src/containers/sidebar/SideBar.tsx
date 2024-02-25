import React from 'react'
import Logo from '../../components/Logo/Logo'
import  Filters from '../../components/Filters/Filters'
import Menu  from '../../components/Menu/Menu'
import styles from './SideBar.module.scss';
import { useSelector } from 'react-redux';

type sideBarProps = {
  setFilters: Function,
  filters: object,
  filtersData: any,
}


export const SideBar = (props:sideBarProps) => {

  const {setFilters, filters, filtersData} = props;
  const isDarkTheme = useSelector((state:any) => state.theme.isDarkTheme);

  return (
    <div className={`${styles.sidebarWrapper} ${isDarkTheme && styles.darkTheme}`}>
        <div><Logo /></div>
        <div>
            <h3 className={styles.filterTitle}>FILTER</h3>
            <Filters filtersData={filtersData} filters={filters} setFilters={setFilters}/>
        </div>
        <div>
            <Menu />
        </div>
    </div>
  )
}
