import React, { useContext, useEffect, useRef } from 'react'
import styles from "./Search.module.scss"
import useInput from '../../hooks/useInput';
import AppContext from '../../context/appContext';
import { getCityPromotion } from '../../utils/getCityPromotion';
import { isEmpty } from "lodash"
import Input from '../../components/input/Input';

const Search = () => {

    const [search, bindSearch] = useInput("");
    const { setCityPromotion, setShowCityPromotion, cityPromotion, previousCity, setPreviousCity } = useContext(AppContext);

    const inputReference = useRef(null);
    console.log('parent ref', inputReference);

    console.log("Container - search");

    useEffect(() => {
        console.log('reff',inputReference.current);
        inputReference.current && 
        inputReference.current.focus();
        // inputReference.current.focusInputField();
    }, []);

    async function fetchPromotion() {
        if (search !== "") {
            let promotionData = await getCityPromotion(search.toUpperCase())
            setCityPromotion(promotionData);
            if(isEmpty(previousCity)) {
                setPreviousCity(cityPromotion);
            }
            setShowCityPromotion(true);
        }
    }

    function updateCityPromotion(e) {
        if(e.key === 'Enter')
            fetchPromotion();
    }

    return (
        <div className={styles.searchContainer}>
            <h3>Travelling leaves you speechless, then turns you into a story teller</h3>
            <p className={styles.contentSmall}>Take every chance you get in your life, because something will happen only once. Once in a while, go somewhere you have never been before</p>
            <p className={styles.contentBig}>With TripZone, you book amazing holiday spots with low fares. We understand how travelling can impact your budget.</p>
            <Input 
                type="text"
                value={search}
                placeholder='Type your favorite destination here!'
                inputReference={inputReference}
                bindInput={bindSearch}
                onKeyDown={updateCityPromotion} 
            />
        </div>
    )
}

export default Search;