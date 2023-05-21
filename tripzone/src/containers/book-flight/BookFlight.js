import React, { useState, useContext, useEffect } from "react";
import DiscountDisplayer from "../../components/discount-displayer/DiscountDisplayer";
import { MEMBERSHIP_YEAR, TAX_PERCENTAGE } from "../../constants/appConstants.constant";
import ButtonGroup from "../../components/button-group/ButtonGroup";
import Button from "../../components/button/Button";
import styles from "./BookFlight.module.scss";
import LoginContext from "../../context/loginContext";
import prime from "../../assets/prime.png";

const BookFlight = (props) => {
    const { flightDetails } = props;
    const [discount, setDiscount] = useState(10);
    const [tax, setTax] = useState(5);
    const [flightPrice, setFlightPrice] = useState(flightDetails.price)

    console.log("Container - book flight")
    const { user } = useContext(LoginContext)

    useEffect(() => {
        setDiscount(10);
        setTax(5);
        setFlightPrice(flightDetails.price);
    }, [flightDetails])

    function increaseDiscount(increamentValue) {
        const price = Number(flightDetails.price)
        setDiscount(10 + increamentValue);
        setFlightPrice(price - discount)
    }

    function increaseTax(taxPercentage) {
        const price = Number(flightDetails.price)
        const amount = (price / 100) * taxPercentage;
        setTax(taxPercentage);
        setFlightPrice(price + amount);
    }

    return (
        <div className={styles.bookFlightWrapper}>
            <div className={styles.bookFlightHeader}>

                <h2>Book now</h2>
                {user.prime &&
                    <img src={prime} className={styles.primeLogo} alt="prime user" />}
            </div>
            <h6 className={styles.price}>$ {flightPrice}</h6>
            <div className={styles.displayDiscountContainer}>
                <DiscountDisplayer title="Membership Discount" price={discount} />
                <DiscountDisplayer title="Tax Amount" price={tax} />
            </div>
            <div className={styles.contentWrapper}>
                <p className={styles.content}>You can increase your membership discount by renewing your membership. Choose Number of Years to Renew.</p>
                <ButtonGroup items={MEMBERSHIP_YEAR} onClick={increaseDiscount} />
            </div>
            <div className={styles.contentWrappsr}>
                <p className={styles.content}>You can donate to COVID-19 fund by increasing the Tax component. Choose % of Tax Component to be increased</p>
                <ButtonGroup items={TAX_PERCENTAGE} onClick={increaseTax} />
            </div>
            <div className={styles.contentWrapper}>
                <p className={styles.content}>Your ticket will be emailed to your registered email and phone number.</p>
                <Button label="Prooced to pay" />
            </div>
        </div>
    )
}

export default BookFlight;