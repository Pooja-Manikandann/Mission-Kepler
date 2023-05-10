import React, { useCallback, useEffect } from 'react'
import Search from '../search/Search';
import CityPromotion from '../city-promotion/CityPromotion';
import GlobalPromotion from '../global-promotion/GlobalPromotion';
import styles from "./LeftContainer.module.scss"
import useInput from '../../hooks/useInput';

const LeftContainer = (props) => {
    const { cityInformation, touristSpots } = props;

    // const [search, bindSearch] = useInput("");




    return (
        <div className={styles.leftWrapper}>
            <Search />
            <CityPromotion cityInformation={cityInformation} touristSpots={touristSpots} />
            <GlobalPromotion />
            {/* <PureGlobalPromotion /> */}

        </div>
    )
}


export default LeftContainer;