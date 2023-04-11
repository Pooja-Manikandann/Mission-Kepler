import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown/Dropdown';
import useInput from '../../hooks/useInput';
import getCities from '../../services/getCities';
import styles from "./TripForm.module.scss"
import Axios from 'axios'
import getAvailableFlights from '../../services/getAvailableFlights';

const TripForm = (props) => {

    const { setAvailableFlights } = props;

    const [cities, setCities] = useState([])
    // const [source, setSourse] = useState("");

    const [source, bindSource] = useInput("")

    const [destination, bindDestination] = useInput("");


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
                <Dropdown options={cities} label="Source" bindValue={bindSource} />
                <Dropdown options={cities} label="Destination" bindValue={bindDestination} />
                <Button label="Search" onClick={updateAvailableFlights} />
            </form>
        </div>
    )
}

export default TripForm;