import React from "react";
import { convertToCurrency } from "../../utils/convertToCurrency";
import Button from "../button/Button";
import styles from "./CartItem.module.scss"
import PropTypes from "prop-types"
import { ADD_TO_CART, DECREAMENT } from "../../constants/AppConstants";
import { defaultImageProvider } from "../../utils/defaultImageProvider";

const CartItem = (props) => {
    const { cartItem, showCart, updateCart, updateWishlist } = props;

    return (
        <div className={styles.cartItem}>
            <img src={cartItem && cartItem.photo} alt="product" onError={defaultImageProvider} />
            <div className={styles.itemContent}>
                <h4>{cartItem && cartItem.name}</h4>
                <p>{cartItem && convertToCurrency(cartItem.price)}</p>
            </div>
            {/* Displays the actions for a cart/wishlist item to increase/decrease cart item or to add item to cart from wishlist */}
            <div className={styles.itemActions}>
                {
                    showCart ?
                        <div className={styles.cartAction}>
                            <span className={styles.actions} onClick={() => { updateCart(cartItem, DECREAMENT) }}>-</span>
                            <span>{cartItem.count}</span>
                            <span className={styles.actions} onClick={() => { updateCart(cartItem) }}>+</span>
                        </div> :
                        <Button label={ADD_TO_CART} onClick={() => { updateWishlist(cartItem, DECREAMENT) }} />
                }
            </div>
        </div>
    )
}

CartItem.propTypes = {
    cartItem: PropTypes.object,
    showCart: PropTypes.bool,
    updateCart: PropTypes.func,
    updateWishlist: PropTypes.func
}

CartItem.defaultProps = {
    cartItem: {
        count: 0,
        description: "",
        guarantee: "",
        id: 0,
        name: "",
        photo: "",
        price: "",
        rating: 0.0
    },
    showCart: false,
    updateCart: () => { },
    updateWishlist: () => { }
}

export default CartItem;