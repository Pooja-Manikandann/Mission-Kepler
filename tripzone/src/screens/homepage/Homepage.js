import React, { useEffect } from 'react'
import Header from '../../containers/header/Header';
import Search from '../../containers/search/Search';
import TripForm from '../../containers/trip-form/TripForm';
import styles from "./Homepage.module.scss"

const Homepage = () => {
    useEffect(() => {

    })
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.leftWrapper}>
                    <Search />

                </div>
                <div className={styles.rightWrapper}>
                    <TripForm />
                </div>
            </div>
        </div>
    )
}

export default Homepage;