import React, { useState, useContext, useEffect, useMemo } from "react";
import DiscountDisplayer from "../../components/discount-displayer/DiscountDisplayer";
import { MEMBERSHIP_YEAR, TAX_PERCENTAGE } from "../../constants/appConstants.constant";
import ButtonGroup from "../../components/button-group/ButtonGroup";
import Button from "../../components/Button/Button";
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

    function increaseDiscount() {
        const price = Number(flightDetails.price)
        const total = price - discount;
        setFlightPrice(total);
        return total; 
    }

    function updateDiscount(increamentValue){
        const discountAmount = 10 + increamentValue;
        setDiscount(discountAmount);
    }
    function updateTax(increamentValue){
        setTax(increamentValue);
    }

    const memoizedDiscount = useMemo(()=>{
        increaseDiscount();
        // increaseTax();
    }, [discount]);
    const memoizedTax = useMemo(increaseTax, [tax]);

    function increaseTax() {
        const price = Number(flightDetails.price)
        const amount = Math.round((price / 100) * tax);
        console.log('ygjbgjbh', amount, price);
        // setTax(amount);
        setFlightPrice(price + amount);
        return price + amount;
    }

    useEffect(()=>{
        if(memoizedTax)
        setFlightPrice(memoizedTax)
    },[memoizedTax])
    useEffect(()=>{
        if(memoizedDiscount)
        setFlightPrice(memoizedDiscount)
    },[memoizedDiscount])

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
                <p className={styles.content}>You can further increase your membership discount by renewing your membership. Choose Number of Years to Renew.</p>
                <ButtonGroup items={MEMBERSHIP_YEAR} onClick={updateDiscount} />
            </div>
            <div className={styles.contentWrappsr}>
                <p className={styles.content}>You can donate to COVID-19 care fund by increasing the TaxComponent. Choose % of Tax Component to be increased</p>
                <ButtonGroup items={TAX_PERCENTAGE} onClick={updateTax} />
            </div>
            <div className={styles.contentWrapper}>
                <p className={styles.content}>Your ticket will be emailed to your registered email and phone number.</p>
                <Button label="Prooced to pay" />
            </div>
        </div>
    )
}

export default BookFlight;