import React, { useState } from "react";
import DiscountDisplayer from "../../components/discount-displayer/DiscountDisplayer";
import { MEMBERSHIP_YEAR, TAX_PERCENTAGE } from "../../constants/appConstants";
import ButtonGroup from "../../components/button-group/ButtonGroup";
import Button from "../../components/button/Button";
import styles from "./BookFlight.module.scss";

const BookFlight = (props) => {
    const { flightDetails } = props;
    const [discount, setDiscount] = useState(10);
    const [tax, setTax] = useState(5);
    return (
        <div className={styles.bookFlightWrapper}>
            <h2>Book now</h2>
            <h6 className={styles.price}>$ {flightDetails.price}</h6>
            <div className={styles.displayDiscountContainer}>
                <DiscountDisplayer title="Membership Discount" price={discount} />
                <DiscountDisplayer title="Tax Amount" price={tax} />
            </div>
            <div className={styles.contentWrapper}>
                <p className={styles.content}>You can increase your membership discount by renewing your membership. Choose Number of Years to Renew.</p>
                <ButtonGroup items={MEMBERSHIP_YEAR} />
            </div>
            <div className={styles.contentWrapper}>
                <p className={styles.content}>You can donate to COVID-19 fund by increasing the Tax component. Choose % of Tax Component to be increased</p>
                <ButtonGroup items={TAX_PERCENTAGE} />
            </div>
            <div className={styles.contentWrapper}>

                <p className={styles.content}>Your ticket will be emailed to your registered email and phone number.</p>
                <Button label="Prooced to pay" />
            </div>

        </div>
    )
}

export default BookFlight;