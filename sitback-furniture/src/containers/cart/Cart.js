import React from "react";
import Button from "../../components/Button/Button";
import CartItem from "../../components/cart-item/CartItem";
import Navbar from "../../components/navbar/Navbar";
import { convertToCurrency } from "../../utils/convertToCurrency";
import styles from './Cart.module.scss'
import PropTypes from "prop-types"

const Cart = (props) => {
    const { items, setActiveCartMenu, activeCartMenu, setShowWishlist, setShowCart, cartPrice, showCart, updateCart, removeFromWishlist } = props;

    const menuItems = [
        {
            id: "mycart",
        },
        {
            id: "mywishlist"
        }
    ]
    function updateMenu(id) {
        setActiveCartMenu(id)
        if (id === "mycart") {
            setShowCart(true);
            setShowWishlist(false)
        }
        else if (id === "mywishlist") {
            setShowCart(false);
            setShowWishlist(true)
        }
    }


    return (
        <div className={styles.cartWrapper}>

            <Navbar menuItems={menuItems} handleClick={updateMenu} activeMenu={activeCartMenu} isHeaderNav={false} />
            <div className={styles.cartItemsWrapper}>
                {items.map((item) => (

                    <CartItem cartItem={item} key={item.id} showCart={showCart} updateCart={updateCart} removeFromWishlist={removeFromWishlist} />
                ))}
            </div>
            {showCart &&
                <div className={styles.cartFooterWrapper}>
                    <div className={styles.leftWrapper}>
                        <h4>Total amount</h4>
                        <p>{convertToCurrency(cartPrice)}</p>
                    </div>
                    <Button label="PLACE ORDER" />
                </div>
            }
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