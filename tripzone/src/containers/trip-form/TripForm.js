import React, { useEffect, useState } from 'react'
import Button from '../../components/button/Button';
import Dropdown from '../../components/dropdown/Dropdown';
import getCities from '../../services/getCities';
import styles from "./TripForm.module.scss"
import getAvailableFlights from '../../services/getAvailableFlights';
import { DESTINATION, SOURCE } from '../../constants/appConstants';

const TripForm = (props) => {

    const { setAvailableFlights, source, bindSource, destination, bindDestination } = props;

    const [cities, setCities] = useState([])
    // const [source, setSourse] = useState("");

    console.log("trip form")
    useEffect(() => {
        updateCities();
        async function updateCities() {
            let citiesResponse = await getCities();
            setCities(citiesResponse);
        }
    }, [])

    const updateAvailableFlights = async (e) => {
        e.preventDefault();
        const flightResponse = await getAvailableFlights(source, destination)
        setAvailableFlights(flightResponse);
    }

    return (
        <div className={styles.tripFormWrapper}>
            <h2>Plan my trip</h2>
            <form>
                <Dropdown options={cities} label={SOURCE} bindValue={bindSource} />
                <Dropdown options={cities} label={DESTINATION} bindValue={bindDestination} />
                <Button label="Search" onClick={updateAvailableFlights} />
            </form>
        </div>
    )
}

export default TripForm;