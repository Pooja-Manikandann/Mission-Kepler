import React, { useEffect } from "react";
import Products from "../products/Products";
import styles from "./OrderConfirmation.module.scss"
import Dashboard from "../dashboard/Dashboard"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom";

const OrderConfirmation = (props) => {
    const { categories } = props;
    let location = useLocation();
    const { items } = location.state
    useEffect(() => {
        return () => {
            localStorage.removeItem("cart")
        }
    }, [])

    return (
        <div>
            <div className={styles.confirmationWrapper}>
                <h2 className={styles.confirmationTitle}>Order Confirmation</h2>
                <h3 className={styles.confirmationCaption}>Thank you for shopping with us. The items will be delivered in 7 days.</h3>
                <Products products={items} classNames="margin-even" isConfirmationPage={true} />
            </div>
            <Dashboard categories={categories} classNames="padding-even" />
        </div >
    )
}

OrderConfirmation.defaultProps = {
    categories: [{
        id: "",
        photo: "",
        category: "",
        description: ""
    }]
}

OrderConfirmation.propType = {
    categories: PropTypes.array,
}

export default OrderConfirmation;