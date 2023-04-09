import React, { useEffect, useState } from 'react'
import Dropdown from '../../components/Dropdown/Dropdown';
import useInput from '../../hooks/useInput';
import getCities from '../../services/getCities';
import styles from "./TripForm.module.scss"

const TripForm = () => {

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
    return (
        <div>
            <form>
                <h2>Plan my trip</h2>
                <Dropdown options={cities} label="Source" bindValue={bindSource} />
                <Dropdown options={cities} label="Destination" bindValue={bindDestination} />
            </form>
        </div>
    )
}

export default TripForm;