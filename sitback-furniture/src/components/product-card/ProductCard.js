import React from "react";
import styles from "./ProductCard.module.scss"
import Button from "../Button/Button"
import { convertToCurrency } from "../../utils/convertToCurrency";
import PropTypes from "prop-types";

const ProductCard = (props) => {
    const { product } = props;

    return (
        <div className={styles.productCardWrapper}>
            <div className={styles.products}>
                <img src={product.photo} alt="product" />
                <div className={styles.header}>
                    <h4 className={styles.productTitle}>{product.name}</h4>
                    <span>{convertToCurrency(product.price)}</span>
                </div>
                <p>{product.description}</p>
                <h5>{product.guarantee > 1 ? "YEARS" : "YEAR"} GUARANTEE</h5>
            </div>
            <div className={styles.actions}>
                <span>ADD TO WISHLIST</span>
                <Button label="ADD TO CART" />
            </div>
        </div>
    )
}

ProductCard.defaultProps = {
    product: {
        description: "",
        guarantee: 0,
        id: 0,
        name: "",
        photo: "",
        price: "",
        rating: 0.0
    }
}

ProductCard.propType = {
    product: PropTypes.object
}


export default ProductCard;