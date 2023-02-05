import React from "react";
import { convertToCurrency } from "../../utils/convertToCurrency";
import Button from "../Button/Button";
import styles from "./CartItem.module.scss"
import PropTypes from "prop-types"

const CartItem = (props) => {
    const { cartItem, showCart, updateCart, removeFromWishlist } = props
    return (
        <div className={styles.cartItem}>
            <img src={cartItem && cartItem.photo} alt="product" />
            <div className={styles.itemContent}>
                <h4>{cartItem && cartItem.name}</h4>
                <p>{cartItem && convertToCurrency(cartItem.price)}</p>
            </div>
            <div className={styles.itemActions}>
                {
                    showCart ?
                        <div className={styles.cartAction}>
                            <span onClick={() => { updateCart(cartItem, "decreament") }}>-</span>
                            <span>{cartItem.count}</span>
                            <span onClick={() => { updateCart(cartItem) }}>+</span>
                        </div> :
                        <Button label="ADD TO CART" onClick={() => { removeFromWishlist(cartItem) }} />
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