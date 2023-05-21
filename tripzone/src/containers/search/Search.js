import React, { useContext, useEffect, useRef } from 'react'
import styles from "./Search.module.scss"
import useInput from '../../hooks/useInput';
import AppContext from '../../context/appContext';
import { getCityPromotion } from '../../utils/getCityPromotion';

const Search = () => {

    const [search, bindSearch] = useInput("");
    const { setCityPromotion, setShowCityPromotion } = useContext(AppContext);

    const inputReference = useRef(null);

    console.log("Container - search");

    useEffect(() => {
        inputReference.current.focus();
    }, [])

    useEffect(() => {
        async function fetchPromotion() {
            if (search !== "") {
                let promotionData = await getCityPromotion(search.toUpperCase())
                setCityPromotion(promotionData);
                setShowCityPromotion(true);
            }
        }
        fetchPromotion();
    }, [search]);

    return (
        <div className={styles.searchContainer}>
            <h3>Travelling leaves you speechless, then turns you into a story teller</h3>
            <p className={styles.contentSmall}>Take every chance you get in your life, because something will happen only once. Once in a while, go somewhere you have never been before</p>
            <p className={styles.contentBig}>With TripZone, you book amazing holiday spots with low fares. We understand how travelling can impact your budget.</p>
            <input type="text" className={styles.searchInputBox} value={search} placeholder='Type your favorite destination here!' ref={inputReference} {...bindSearch} />
        </div>
    )
}

export default Search;