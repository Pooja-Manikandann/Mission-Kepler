import React, { useEffect } from 'react'
import Search from '../search/Search';
import CityPromotion from '../city-promotion/CityPromotion';
import GlobalPromotion from '../global-promotion/GlobalPromotion';
import styles from "./LeftContainer.module.scss"
import useInput from '../../hooks/useInput';

const LeftContainer = (props) => {
    const { cityInformation, touristSpots, updateCityPromotion } = props;

    const [search, bindSearch] = useInput("");

    useEffect(() => {
        console.log("search effect", search)
        updateCityPromotion(search.toUpperCase())
    }, [search, updateCityPromotion])




    return (
        <div className={styles.leftWrapper}>
            <Search search={search} bindSearch={bindSearch} />
            <CityPromotion cityInformation={cityInformation} touristSpots={touristSpots} />
            <GlobalPromotion />
            {/* <PureGlobalPromotion /> */}

        </div>
    )
}


export default LeftContainer;