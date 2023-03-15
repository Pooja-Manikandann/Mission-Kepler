import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import CartItem from "../../components/cart-item/CartItem";
import Navbar from "../../components/navbar/Navbar";
import { convertToCurrency } from "../../utils/convertToCurrency";
import styles from './Cart.module.scss'
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { MENU_ITEMS, MY_CART, MY_WISHLIST, PLACE_ORDER } from "../../constants/AppConstants";
import { calculateOrderTotal } from "../../utils/calculateOrderTotal";

const Cart = (props) => {
    const { items, setActiveCartMenu, activeCartMenu, updateCart, updateWishlist, setConfirmedOrders } = props;
    const [totalPrice, setTotalPrice] = useState(false)
    let cartItems, total = 0;

    useEffect(() => {
        getTotalPrice();
    }, [updateCart])

    const getTotalPrice = () => {
        if (items.length && activeCartMenu === MY_CART) {
            total = calculateOrderTotal(items);
            setTotalPrice(total);
        }
    }

    /**
     * function to toggle between cart and wishlist
     * @param {string} id - id of selected tab - cart/wishlist
     */
    const updateMenu = (id) => {
        setActiveCartMenu(id)
    }

    /**
     * function called on confirm order
     */
    const placeOrder = () => {
        setConfirmedOrders([...items])
        updateCart([])
    }


    if (items && items.length) {
        cartItems = items.map((item) => (

            <CartItem cartItem={item} key={item.id} showCart={activeCartMenu === MY_CART} updateCart={updateCart} updateWishlist={updateWishlist} />
        ))
    }
    else if (activeCartMenu === MY_CART && !items.length) {
        cartItems = <p>No items in carts</p>
    }
    else if (activeCartMenu === MY_WISHLIST && !items.length) {
        cartItems = <p>No items in wishlist</p>
    }

    return (
        <div>

            {/* Cart/wishlist wrapper */}
            <div className={`${styles.cartWrapper} ${styles.showCart}`}>
                {/* Navbar to switch tab between cart/wishlist */}
                <Navbar menuItems={MENU_ITEMS} handleClick={updateMenu} activeMenu={activeCartMenu} isHeaderNav={false} />
                <div className={styles.cartItemsWrapper}>
                    {cartItems}
                </div>
                {/* cart footer with total cost of products in cart only shown in show cart tab */}
                {activeCartMenu === MY_CART &&
                    <div className={styles.cartFooterWrapper}>
                        <div className={styles.leftWrapper}>
                            <h5>Total amount</h5>
                            <p>{convertToCurrency(totalPrice)}</p>
                        </div>
                        {/* button to confirm order and navigate to order confirmation page */}
                        <Link to="/confirmOrder"><Button label={PLACE_ORDER} onClick={placeOrder} disabled={activeCartMenu === MY_CART && !items.length} /></Link>
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
    setShowCart: PropTypes.func,
    updateCart: PropTypes.func,
    removeFromWishlist: PropTypes.func
}

Cart.defaultProps = {
    items: [],
    setActiveCartMenu: () => { },
    activeCartMenu: "",
    setShowCart: () => { },
    updateCart: () => { },
    removeFromWishlist: () => { }
}

export default Cart;