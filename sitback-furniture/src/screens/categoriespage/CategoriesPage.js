import React, { useEffect, useState } from "react"
import Cart from "../../containers/cart/Cart";
import Products from "../../containers/products/Products";
import { getProducts } from "../../services/getProducts";
import styles from "./CategoriesPage.module.scss"
import PropTypes from "prop-types"
import { INCREAMENT, MY_CART, DECREAMENT } from "../../constants/AppConstants";
import { useParams } from "react-router-dom";

const CategoriesPage = (props) => {
    const { setIsLoading, setConfirmedOrders } = props;
    const [products, setProducts] = useState([]);
    const [activeCartMenu, setActiveCartMenu] = useState("")
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [wishListItems, setWishListItems] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);

    let { categoryId } = useParams();
    useEffect(() => {
        const fetchProducts = async () => {
            let products = await getProducts(categoryId);
            setProducts(products);
            setIsLoading(false);
        }
        if (products.length)
            setIsLoading(true);
        fetchProducts();
    }, [categoryId])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishListItems))
    })
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

    function updateWishlist(product, updateFunction = INCREAMENT) {
        let index = wishListItems.findIndex(item => item.id === product.id);
        if (updateFunction === INCREAMENT && index < 0) {
            setWishListItems([...wishListItems, product])
        }
        else if (updateFunction === DECREAMENT && index >= 0) {
            setWishListItems([...wishListItems.slice(0, index), ...wishListItems.slice(index + 1)])
            updateCart(product);
            setActiveCartMenu(MY_CART)
        }
    }


    return (
        <div className={styles.wrapper}>

            {/* shows all products on selected category */}
            <Products
                products={products}
                activeCartMenu={activeCartMenu}
                updateCart={updateCart}
                updateWishlist={updateWishlist}
                setActiveCartMenu={setActiveCartMenu}
            />
            {/* Displays cart or wishlist based on selected */}
            {(activeCartMenu !== "") &&
                <Cart
                    items={(activeCartMenu === MY_CART && cartItems) || (activeCartMenu === "mywishlist" && wishListItems)}
                    activeCartMenu={activeCartMenu}
                    setActiveCartMenu={setActiveCartMenu}
                    updateCart={updateCart}
                    updateWishlist={updateWishlist}
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