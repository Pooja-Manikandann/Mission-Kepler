import React, { useEffect, useState } from "react"
import Cart from "../../containers/cart/Cart";
import Products from "../../containers/products/Products";
import { getProducts } from "../../services/getProducts";
import styles from "./CategoriesPage.module.scss"
import PropTypes from "prop-types"
import { INCREAMENT, MY_CART } from "../../constants/AppConstants";

const CategoriesPage = (props) => {
    const { category, setIsLoading, cartItems, setCartItems, wishListItems, setWishListItems, setCategory, setConfirmedOrders } = props;
    const [products, setProducts] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showWishlist, setShowWishlist] = useState(false);
    const [activeCartMenu, setActiveCartMenu] = useState("")

    useEffect(() => {
        const fetchProducts = async () => {
            let products = await getProducts(category);
            setProducts(products);
            setIsLoading(false);
        }
        if (products.length)
            setIsLoading(true);
        fetchProducts();
    }, [category])


    /**
     * 
     * @param {object} product - product to be updated in cart
     * @param {string} updateFunction - increament or decreament functionality
     */
    function updateCart(product, updateFunction = INCREAMENT) {
        if (Object.keys(product).length !== 0) {
            let index = cartItems.findIndex(cartItem => cartItem.id === product.id)

            // product already exist in cart
            if (index >= 0) {
                // increament product quantity in cart
                if (updateFunction === INCREAMENT) {
                    setCartItems([...cartItems.slice(0, index), { ...product, count: cartItems[index].count + 1 }, ...cartItems.slice(index + 1)])
                }
                // decreament product quantity in cart
                else {
                    if (cartItems[index].count > 1) {
                        setCartItems([...cartItems.slice(0, index), { ...product, count: cartItems[index].count - 1 }, ...cartItems.slice(index + 1)])
                    } else {
                        setCartItems([...cartItems.slice(0, index), ...cartItems.slice(index + 1)])
                    }

                }
            }
            // product not available in cart to be added
            else {
                setCartItems([...cartItems, { ...product, count: 1 }])
            }
        }
        else {
            setCartItems([])
        }

    }

    function removeFromWishlist(product) {
        let index = wishListItems.findIndex(item => item.id === product.id);
        if (index >= 0) {
            setWishListItems([...wishListItems.slice(0, index), ...wishListItems.slice(index + 1)])
        }
        updateCart(product);
        setShowCart(true);
        setShowWishlist(false);
        setActiveCartMenu(MY_CART)
    }


    function updateWishlist(product) {
        let index = wishListItems.findIndex(item => item.id === product.id);
        if (index < 0) {
            setWishListItems([...wishListItems, product])
        }
    }

    // const getCartTotalPrice = () => {
    //     let total = calculateOrderTotal(cartItems);
    // }

    return (
        <div className={styles.wrapper}>

            {/* shows all products on selected category */}
            <Products products={products} setShowCart={setShowCart} showWishlist={showWishlist} showCart={showCart} setShowWishlist={setShowWishlist} updateCart={updateCart} updateWishlist={updateWishlist} setActiveCartMenu={setActiveCartMenu} />
            {/* Displays cart or wishlist based on selected */}
            {(showCart || showWishlist) &&
                <Cart
                    items={(showCart && cartItems) || (showWishlist && wishListItems)}
                    activeCartMenu={activeCartMenu}
                    setActiveCartMenu={setActiveCartMenu}
                    showCart={showCart}
                    updateCart={updateCart}
                    setShowCart={setShowCart}
                    setShowWishlist={setShowWishlist}
                    removeFromWishlist={removeFromWishlist}
                    setCategory={setCategory}
                    setConfirmedOrders={setConfirmedOrders}
                />}
        </div>
    )
}

CategoriesPage.propType = {
    cartItems: PropTypes.array,
    setCartItems: PropTypes.func,
    wishListItems: PropTypes.array,
    setWishListItems: PropTypes.func
}

CategoriesPage.defaultProps = {
    cartItems: [],
    setCartItems: () => { },
    wishListItems: [],
    setWishListItems: () => { }
}

export default CategoriesPage;