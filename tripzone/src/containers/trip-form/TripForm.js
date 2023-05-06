import React, { useCallback, useEffect, useState } from 'react'
import Button from '../../components/button/Button';
import Dropdown from '../../components/dropdown/Dropdown';
import getCities from '../../services/getCities';
import styles from "./TripForm.module.scss"
import { DESTINATION, SOURCE } from '../../constants/appConstants';

const TripForm = (props) => {

    const { source, bindSource, destination, bindDestination, onChange, onSearch } = props;

    const [cities, setCities] = useState([])
    // const [source, setSourse] = useState("");

    console.log("trip form")
    console.log("soucedesti", source, destination)
    useEffect(() => {
        updateCities();
        async function updateCities() {
            let citiesResponse = await getCities();
            setCities(citiesResponse);
        }
    }, [])



    return (
        <div className={styles.tripFormWrapper}>
            <h2>Plan my trip</h2>
            <form>
                <Dropdown options={cities} label={SOURCE} bindValue={bindSource} />
                <Dropdown options={cities} label={DESTINATION} bindValue={bindDestination} onChange={onChange} />
                <Button label="Search" onClick={onSearch} />
            </form>
        </div>
    )
}

export default TripForm;