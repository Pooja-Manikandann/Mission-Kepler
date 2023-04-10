import React, { useState, useEffect } from "react"
import Destinations from "../../Components/Destinations/Destinations"
import Form from "../../Components/Form/Form"
import Header from "../../Components/Header/Header"
import PromoBanner from "../../Components/PromoBanner/PromoBanner"
import getAllPlaces from "../../Services/getAllPlaces"
import styles from "./Homepage.module.scss"

const Homepage = () => {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            setPlaces(await getAllPlaces());
        }
        fetchPlaces();

    }, [])


    return (
        <div className={styles.contentWrapper}>
            <Header />
            <PromoBanner places={places} />
            <Destinations places={places} />
            <Form places={places} />
        </div>
    )
}

export default Homepage;