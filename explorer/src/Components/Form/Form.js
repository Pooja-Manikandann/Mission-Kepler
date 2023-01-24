import React, { useState } from "react";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SuccessBanner from "../SuccessBanner/SuccessBanner";
import styles from "./Form.module.scss"
import { EMPTY_NAME_ERROR, EMPTY_HOME_ERROR, EMPTY_DESTINATION_ERROR, EMPTY_CONTACT_NUMBER_ERROR } from "../../Constants/ErrorMessageConstants";
import { FORM_CONSTANTS, FORM_TITLE, FORM_CAPTION } from "../../Constants/ContactUsFormConstants";
import PropTypes from "prop-types"

const Form = (props) => {
    const { places } = props;
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [destination, setDestination] = useState("");
    const [home, setHome] = useState("");
    const [showSuccessBanner, setShowSuccessBanner] = useState(false);
    const [sumbitClicked, setSumbitClicked] = useState(false);
    const [details, setDetails] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        setSumbitClicked(true);
        if (name.length && destination.length && home.length && number.length) {
            setDetails({ name, number, home, destination });
            setShowSuccessBanner(true);
            resetFormValues();
        }
        else {
            setShowSuccessBanner(false);
        }
    }

    const resetFormValues = () => {
        setName("");
        setDestination("");
        setHome("");
        setNumber("")
    }

    const handleonChange = (e, input) => {
        switch (input) {
            case "name":
                setName(e.target.value);
                break;

            case "home":
                setHome(e.target.value);
                break;

            case "destination":
                setDestination(e.target.value);
                break;
            case "number":
                setNumber(e.target.value)
                break;
            default:
                break;
        }

    }

    return (
        <div className={styles.contactFormContainer}>
            <div className={styles.contactFormWrapper}>
                <div className={styles.contactFromTitleWrapper}>
                    <p className={styles.title}>{FORM_TITLE}</p>
                    <p className={styles.caption}>{FORM_CAPTION}</p>
                </div>
                <form className={styles.formWrapper}>
                    <label for="name">{FORM_CONSTANTS.NAME_INPUT_LABEL}</label>
                    <input type="text" id="name" className={styles.formInput} value={name} onChange={(e) => handleonChange(e, "name")} />
                    {(!name.length && sumbitClicked) &&
                        <ErrorMessage message={EMPTY_NAME_ERROR} />
                    }
                    <label for="home">{FORM_CONSTANTS.HOMETOWN_INPUT_LABEL}</label>
                    <Dropdown places={places} className="formDropdown" value={home} onChange={(e) => handleonChange(e, "home")} />
                    {(!home.length && sumbitClicked) &&
                        <ErrorMessage message={EMPTY_HOME_ERROR} />
                    }
                    <label for="destination">{FORM_CONSTANTS.DESTINATION_INPUT_LABEL}</label>
                    <Dropdown places={places} className="formDropdown" value={destination} onChange={(e) => handleonChange(e, "destination")} />
                    {(!destination.length && sumbitClicked) &&
                        <ErrorMessage message={EMPTY_DESTINATION_ERROR} />
                    }
                    <label for="contactNumber">{FORM_CONSTANTS.CONTACT_NUMBER_LABEL}</label>
                    <input for="number" id="contactNumber" className={styles.formInput} value={number} onChange={(e) => handleonChange(e, "number")} />
                    {(!number.length && sumbitClicked) &&
                        <ErrorMessage message={EMPTY_CONTACT_NUMBER_ERROR} />
                    }
                    <Button label="SUBMIT INTEREST" className="formSubmitButton" submitForm={submitForm} />
                </form>
            </div>
            {showSuccessBanner && <SuccessBanner details={details} />}

        </div>
    )
}

Form.propTypes = {
    places: PropTypes.object
}

export default Form;