import React from "react";
import styles from "./ProductCard.module.scss"
import Button from "../Button/Button"
import { convertToCurrency } from "../../utils/convertToCurrency";
import PropTypes from "prop-types";

const ProductCard = (props) => {
    const { product, setShowCart, setShowWishlist, updateCart, updateWishlist, layout } = props;

    const addToCart = (product) => {
        setShowCart(true)
        updateCart(product);
    }

    const addToWishList = (product) => {
        setShowWishlist(true)
        updateWishlist(product);
    }

    return (
        <div className={`${styles.productCardWrapper} ${styles[layout]}`}>
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
                <span onClick={() => addToWishList(product)}>ADD TO WISHLIST</span>
                <Button label="ADD TO CART" onClick={() => addToCart(product)} />
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
    },
    setShowCart: () => { },
    setShowWishlist: () => { },
    updateCart: () => { },
    updateWishlist: () => { },
    layout: "",

}

ProductCard.propType = {
    product: PropTypes.object,
    setShowCart: PropTypes.func,
    setShowWishlist: PropTypes.func,
    updateCart: PropTypes.func,
    updateWishlist: PropTypes.func,
    layout: PropTypes.string
}


export default ProductCard;