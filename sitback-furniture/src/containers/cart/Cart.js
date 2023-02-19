import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import CartItem from "../../components/cart-item/CartItem";
import Navbar from "../../components/navbar/Navbar";
import { convertToCurrency } from "../../utils/convertToCurrency";
import styles from './Cart.module.scss'
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { MENU_ITEMS, MY_CART, MY_WISHLIST, PLACE_ORDER } from "../../constants/AppConstants";

const Cart = (props) => {
    const { items, setActiveCartMenu, activeCartMenu, setShowWishlist, setShowCart, cartPrice, showCart, updateCart, removeFromWishlist, setCategory, setConfirmedOrders } = props;
    const [hideCart, setHideCart] = useState(false)

    /**
     * function to toggle between cart and wishlist
     * @param {string} id - id of selected tab - cart/wishlist
     */
    const updateMenu = (id) => {
        setActiveCartMenu(id)
        if (id === MY_CART) {
            setShowCart(true);
            setShowWishlist(false)
        }
        else if (id === MY_WISHLIST) {
            setShowCart(false);
            setShowWishlist(true)
        }
    }

    /**
     * function called on confirm order
     */
    const placeOrder = () => {
        setCategory("");
        setConfirmedOrders([...items])
        updateCart([])
    }

    /**
     * function to close cart/wishlist
     */
    const closeCart = () => {
        setHideCart(true)
        setShowCart(false);
        setShowWishlist(false);
        setActiveCartMenu("");
    }

    return (
        <div>
            {/* overlay to close cart/wishlist */}
            <div className={styles.overlay} onClick={closeCart}></div>

            {/* Cart/wishlist wrapper */}
            <div className={`${styles.cartWrapper} ${hideCart ? styles.hideCart : styles.showCart}`}>
                {/* Navbar to switch tab between cart/wishlist */}
                <Navbar menuItems={MENU_ITEMS} handleClick={updateMenu} activeMenu={activeCartMenu} isHeaderNav={false} />
                <div className={styles.cartItemsWrapper}>
                    {/* retuen each of cart/wishlist items */}
                    {items.map((item) => (

                        <CartItem cartItem={item} key={item.id} showCart={showCart} updateCart={updateCart} removeFromWishlist={removeFromWishlist} />
                    ))}
                </div>
                {/* cart footer with total cost of products in cart only shown in show cart tab */}
                {showCart &&
                    <div className={styles.cartFooterWrapper}>
                        <div className={styles.leftWrapper}>
                            <h5>Total amount</h5>
                            <p>{convertToCurrency(cartPrice)}</p>
                        </div>
                        {/* button to confirm order and navigate to order confirmation page */}
                        <Link to="/confirmOrder"><Button label={PLACE_ORDER} onClick={placeOrder} /></Link>
                    </div>
                }
            </div>
        </div>
    )
}

Cart.propType = {
    items: PropTypes.array,
    setActiveCartMenu: PropTypes.func,
    activeCartMenu: PropTypes.string,
    setShowWishlist: PropTypes.func,
    setShowCart: PropTypes.func,
    cartPrice: PropTypes.number,
    showCart: PropTypes.bool,
    updateCart: PropTypes.func,
    removeFromWishlist: PropTypes.func
}

Cart.defaultProps = {
    items: [],
    setActiveCartMenu: () => { },
    activeCartMenu: "",
    setShowWishlist: () => { },
    setShowCart: () => { },
    cartPrice: 0,
    showCart: false,
    updateCart: () => { },
    removeFromWishlist: () => { }
}

export default Cart;