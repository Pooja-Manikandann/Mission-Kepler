import React from "react";
import Products from "../products/Products";
import styles from "./OrderConfirmation.module.scss"
import Dashboard from "../dashboard/Dashboard"
import PropTypes from "prop-types"

const OrderConfirmation = (props) => {
    const { products, categories } = props;

    return (
        <div>
            <div className={styles.confirmationWrapper}>
                <h2 className={styles.confirmationTitle}>Order Confirmation</h2>
                <h3 className={styles.confirmationCaption}>Thank you for shopping with us. The items will be delivered in 7 days.</h3>
                <Products products={products} classNames="margin-even" isConfirmationPage={true} />
            </div>
            <Dashboard categories={categories} classNames="padding-even" />
        </div >
    )
}

OrderConfirmation.defaultProps = {
    products: [{
        description: "",
        guarantee: 1,
        id: 1,
        name: "",
        photo: "",
        price: "",
        rating: 0
    }],
    categories: [{
        id: "",
        photo: "",
        category: "",
        description: ""
    }]
}

OrderConfirmation.propType = {
    products: PropTypes.array,
    categories: PropTypes.array,
}

export default OrderConfirmation;