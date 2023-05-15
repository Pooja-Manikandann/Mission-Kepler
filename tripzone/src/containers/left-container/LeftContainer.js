import React, { useContext } from 'react'
import Search from '../search/Search';
import CityPromotion from '../city-promotion/CityPromotion';
import GlobalPromotion from '../global-promotion/GlobalPromotion';
import styles from "./LeftContainer.module.scss"
import AppContext from '../../context/appContext';

const LeftContainer = () => {

    const { showCityPromotion } = useContext(AppContext);

    return (
        <div className={styles.leftWrapper}>
            <Search />
            {showCityPromotion
                &&
                <CityPromotion />}
            <GlobalPromotion />
        </div>
    )
}


export default LeftContainer;