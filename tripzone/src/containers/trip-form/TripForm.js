import React, { useContext, useEffect, useState } from 'react'
import Button from '../../components/button/Button';
import Dropdown from '../../components/dropdown/Dropdown';
import getCities from '../../services/getCities';
import styles from "./TripForm.module.scss"
import { DESTINATION, SOURCE } from '../../constants/appConstants.constant';
import AppContext from '../../context/appContext';
import useInput from '../../hooks/useInput';
import { getCityPromotion } from '../../utils/getCityPromotion';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const TripForm = (props) => {

    const [source, bindSource] = useInput("");
    const [destination, bindDestination] = useInput("");

    const [cities, setCities] = useState([])
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { fetchFlight } = props;
    const { setCityPromotion, setShowCityPromotion } = useContext(AppContext);
    let vertical = 'top';
    let horizontal = 'right';

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
        if (!source || !destination) {
            setShowError(true);
            setErrorMessage("Please select source and destination")
            setTimeout(() => {
                setShowError(false);
            }, 5000)
            return;

        }
        if (source === destination) {
            setShowError(true);
            setErrorMessage("Select different source and destination")

            setTimeout(() => {
                setShowError(false);
            }, 5000)
            return;
        }
        fetchFlight(source, destination);
    }

    useEffect(() => {
        async function fetchPromotion() {
            if (destination) {
                let promotionData = await getCityPromotion(destination)
                setCityPromotion(promotionData);
                setShowCityPromotion(true);
            }
        }
        fetchPromotion();
    }, [destination])

    return (
        <>
            {showError &&
                <Snackbar open={true} anchorOrigin={{ vertical, horizontal }} autoHideDuration={1000}>
                    <Alert severity="error" sx={{ width: '100%' }}>{errorMessage}</Alert>
                </Snackbar>}
            <div className={styles.tripFormWrapper}>
                <h2>Plan my trip</h2>
                <form>
                    <Dropdown options={cities} label={SOURCE} bindValue={bindSource} />
                    <Dropdown options={cities} label={DESTINATION} bindValue={bindDestination} />
                    <Button label="Search" onClick={searchFlights} />
                </form>
            </div>
        </>
    )
}

export default TripForm;