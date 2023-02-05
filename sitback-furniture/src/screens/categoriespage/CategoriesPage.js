import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../components/header/Header";
import Cart from "../../containers/cart/Cart";
import Products from "../../containers/products/Products";
import { getProducts } from "../../services/getProducts";
import styles from "./CategoriesPage.module.scss"
import PropTypes from "prop-types"

const CategoriesPage = (props) => {
    const { categories, category, setCategory, cartItems, setCartItems, wishListItems, setWishListItems } = props;
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showWishlist, setShowWishlist] = useState(false);
    const [activeCartMenu, setActiveCartMenu] = useState("")
    const [cartPrice, setCartPrice] = useState(0)

    useEffect(() => {
        const fetchProducts = async () => {
            let products = await getProducts(categoryId);
            setProducts(products);
        }
        fetchProducts();
    }, [categoryId])

    useEffect(() => {
        getCartTotalPrice();
    }, [cartItems])


    function updateCart(product, updateFunction = "increament") {
        let index = cartItems.findIndex(cartItem => cartItem.id === product.id)

        if (index >= 0) {
            if (updateFunction === "increament") {
                setCartItems([...cartItems.slice(0, index), { ...product, count: cartItems[index].count + 1 }, ...cartItems.slice(index + 1)])
            }
            else {
                if (cartItems[index].count > 1) {
                    setCartItems([...cartItems.slice(0, index), { ...product, count: cartItems[index].count - 1 }, ...cartItems.slice(index + 1)])
                } else {
                    setCartItems([...cartItems.slice(0, index), ...cartItems.slice(index + 1)])
                }

            }
        }
        else {
            setCartItems([...cartItems, { ...product, count: 1 }])
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
        setActiveCartMenu("mycart")
    }


    function updateWishlist(product) {
        let index = wishListItems.findIndex(item => item.id === product.id);
        if (index < 0) {

            setWishListItems([...wishListItems, product])
        }
    }

    const getCartTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += Number(item.price) * item.count
        })
        setCartPrice(total);

    }

    return (
        <div>
            <Header categories={categories} setCategory={setCategory} category={category} />
            <div className={styles.wrapper}>

                <Products products={products} setShowCart={setShowCart} showCart={showCart} setShowWishlist={setShowWishlist} updateCart={updateCart} updateWishlist={updateWishlist} setActiveCartMenu={setActiveCartMenu} />
                {showCart && <Cart items={cartItems} activeCartMenu={activeCartMenu} setActiveCartMenu={setActiveCartMenu} showCart={showCart} updateCart={updateCart} setShowCart={setShowCart} setShowWishlist={setShowWishlist} cartPrice={cartPrice} />}
                {showWishlist && <Cart items={wishListItems} activeCartMenu={activeCartMenu} setActiveCartMenu={setActiveCartMenu} setShowCart={setShowCart} setShowWishlist={setShowWishlist} removeFromWishlist={removeFromWishlist} />}
            </div>
        </div>
    )
}

CategoriesPage.propType = {
    categories: PropTypes.array,
    category: PropTypes.string,
    setCategory: PropTypes.func,
    cartItems: PropTypes.array,
    setCartItems: PropTypes.func,
    wishListItems: PropTypes.array,
    setWishListItems: PropTypes.func
}

CategoriesPage.defaultProps = {
    categories: [],
    category: "",
    setCategory: () => { },
    cartItems: [],
    setCartItems: () => { },
    wishListItems: [],
    setWishListItems: () => { }
}

export default CategoriesPage;