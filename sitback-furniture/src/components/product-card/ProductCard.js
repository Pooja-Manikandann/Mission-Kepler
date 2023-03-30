import React from "react";
import styles from "./ProductCard.module.scss"
import Button from "../Button/Button"
import { convertToCurrency } from "../../utils/convertToCurrency";
import PropTypes from "prop-types";
import { RiShieldCheckFill } from "react-icons/ri";
import { ADD_TO_CART, ADD_TO_WISHLIST, YEAR, YEARS } from "../../constants/AppConstants";
import { defaultImageProvider } from "../../utils/defaultImageProvider";

const ProductCard = (props) => {
    const { product, setShowCart, setShowWishlist, updateCart, updateWishlist, layout, isConfirmationPage } = props;

    /**
     * 
     * @param {object} product - selected product to be added to cart
     */
    const addToCart = (product) => {
        setShowCart(true)
        updateCart(product);
    }

    /**
     * 
     * @param {object} product - selected product to be added to wishlist
     */
    const addToWishList = (product) => {
        setShowWishlist(true)
        updateWishlist(product);
    }

    return (
        <div className={`${styles.productCardWrapper} ${styles[layout]}`}>
            {/* returns each product card styles vary based on the presence of card in either shopping page or order confirmation page */}
            <div className={`${styles.products} ${!isConfirmationPage ? styles.borderBottom : ''}`}>
                <img src={product.photo} alt="product" onError={defaultImageProvider} />
                <div className={styles.header}>
                    <h4 className={styles.productTitle}>{product.name}</h4>
                    <span>{convertToCurrency(product.price)}</span>
                </div>
                {/* Quantity of product need to be shown in order confirmation page only */}
                {isConfirmationPage &&
                    <h6 className={styles.quantity}>Quantity: {product.count}</h6>
                }
                <p className={styles.productDescription}>{product.description}</p>
                {/* Guarantee of the product need to be shown only in shopping page */}
                {!isConfirmationPage &&
                    <div className={styles.guaranteeWrapper}>
                        <RiShieldCheckFill />
                        <h5>{product.guarantee} {product.guarantee > 1 ? YEARS : YEAR} GUARANTEE</h5>
                    </div>}
            </div>
            {/* Actions for each product shown in shopping page */}
            {!isConfirmationPage &&
                <div className={styles.actions}>
                    <span onClick={() => addToWishList(product)}>{ADD_TO_WISHLIST}</span>
                    <Button label={ADD_TO_CART} onClick={() => addToCart(product)} />
                </div>
            }
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
    isConfirmationPage: false

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