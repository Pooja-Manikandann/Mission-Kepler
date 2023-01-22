import React, { useState, useEffect } from "react"
import Header from "../../Components/Header/Header"
import PromoBanner from "../../Components/PromoBanner/PromoBanner"
import getAllPlaces from "../../Services/getAllPlaces"

const Homepage = () => {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            setPlaces(await getAllPlaces());
        }
        fetchPlaces();

    }, [])

    console.log("place", places)

    return (
        <div>
            <Header />
            <PromoBanner places={places} />
        </div>
    )
}

export default Homepage;