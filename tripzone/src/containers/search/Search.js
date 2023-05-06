import React, { useEffect, useRef, memo } from 'react'
import styles from "./Search.module.scss"

const Search = (props) => {

    const { search, bindSearch, onChange } = props;

    const inputReference = useRef(null);

    useEffect(() => {
        inputReference.current.focus();
    }, [])
    console.log("search")

    return (
        <div className={styles.searchContainer}>
            <h3>Travelling leaves you speechless, then turns you into a story teller</h3>
            <p className={styles.contentSmall}>Take every chance you get in your life, because something will happen only once. Once in a while, go somewhere you have never been before</p>
            <p className={styles.contentBig}>With TripZone, you book amazing holiday spots with low fares. We understand how travelling can impact your budget.</p>
            <input type="text" className={styles.searchInputBox} value={search} placeholder='Type your favorite destination here!' ref={inputReference} {...bindSearch} onInput={onChange} />
        </div>
    )
}

export default Search;