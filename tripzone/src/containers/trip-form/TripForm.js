import React, { useContext, useEffect, useState } from 'react'
import Button from '../../components/button/Button';
import Dropdown from '../../components/dropdown/Dropdown';
import getCities from '../../services/getCities';
import styles from "./TripForm.module.scss"
import { DESTINATION, SOURCE } from '../../constants/appConstants.constant';
import AppContext from '../../context/appContext';
import useInput from '../../hooks/useInput';
import { getCityPromotion } from '../../utils/getCityPromotion';

const TripForm = (props) => {

    const [source, bindSource] = useInput("");
    const [destination, bindDestination] = useInput("");

    const [cities, setCities] = useState([])
    const { fetchFlight } = props;
    const { setCityPromotion } = useContext(AppContext)
    // const [source, setSourse] = useState("");

    console.log("trip form")
    useEffect(() => {
        updateCities();
        async function updateCities() {
            let citiesResponse = await getCities();
            setCities(citiesResponse);
        }
    }, [])

    function searchFlights(e) {
        e.preventDefault();
        fetchFlight(source, destination);
    }

    useEffect(() => {
        let promotionData = getCityPromotion(destination)
        setCityPromotion(promotionData);
    }, [destination])

    return (
        <div className={styles.tripFormWrapper}>
            <h2>Plan my trip</h2>
            <form>
                <Dropdown options={cities} label={SOURCE} bindValue={bindSource} />
                <Dropdown options={cities} label={DESTINATION} bindValue={bindDestination} />
                <Button label="Search" onClick={searchFlights} />
            </form>
        </div>
    )
}

export default TripForm;