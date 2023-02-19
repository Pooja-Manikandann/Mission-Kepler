import React from "react";
import { convertToCurrency } from "../../utils/convertToCurrency";
import Button from "../button/Button";
import styles from "./CartItem.module.scss"
import PropTypes from "prop-types"
import { ADD_TO_CART, DECREAMENT } from "../../constants/AppConstants";

const CartItem = (props) => {
    const { cartItem, showCart, updateCart, removeFromWishlist } = props;

    return (
        <div className={styles.cartItem}>
            <img src={cartItem && cartItem.photo} alt="product" />
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
                        <Button label={ADD_TO_CART} onClick={() => { removeFromWishlist(cartItem) }} />
                }
            </div>
        </div>
    )
}

CartItem.propTypes = {
    cartItem: PropTypes.object,
    showCart: PropTypes.bool,
    updateCart: PropTypes.func,
    removeFromWishlist: PropTypes.func
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
    removeFromWishlist: () => { }
}

export default CartItem;