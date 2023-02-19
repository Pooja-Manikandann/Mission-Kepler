import React from "react";
import Products from "../products/Products";
import styles from "./OrderConfirmation.module.scss"
import Dashboard from "../dashboard/Dashboard"

const OrderConfirmation = (props) => {
    const { products, categories, setCategory } = props;

    return (
        <div>
            <div className={styles.confirmationWrapper}>
                <h2 className={styles.confirmationTitle}>Order Confirmation</h2>
                <h3 className={styles.confirmationCaption}>Thank you for shopping with us. The items will be delivered in 7 days.</h3>
                <Products products={products} classNames="margin-even" isConfirmationPage={true} />
            </div>
            <Dashboard categories={categories} setCategory={setCategory} classNames="padding-even" />
        </div >
    )
}

export default OrderConfirmation;