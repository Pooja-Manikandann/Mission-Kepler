import React from "react";
import ProductCard from "../../components/product-card/ProductCard";
import styles from "./Products.module.scss"
import PropTypes from "prop-types"
import { MY_CART, MY_WISHLIST } from "../../constants/AppConstants";

const Products = (props) => {
    const { products, updateCart, updateWishlist, activeCartMenu, setActiveCartMenu, isConfirmationPage, classNames } = props;


    function updateShowCart() {
        setActiveCartMenu(MY_CART);
    }

    function updateShowWishList() {
        setActiveCartMenu(MY_WISHLIST);
    }

    return (
        <div className={`${styles.productsWrapper} ${styles[classNames]} ${(activeCartMenu && activeCartMenu !== "") ? styles.threeColumnLayout : ""}`}>
            {/* iterate through products and returns product cards */}
            {products.map((product) => (
                <ProductCard product={product} key={product.id} layout={(activeCartMenu && activeCartMenu !== "") ? "threeColumnCard" : "fourColumnCard"} setShowCart={updateShowCart} setShowWishlist={updateShowWishList} updateCart={updateCart} updateWishlist={updateWishlist} isConfirmationPage={isConfirmationPage} />
            ))}
        </div>
    )
}

Products.propType = {
    products: PropTypes.array,
    setShowCart: PropTypes.func,
    updateCart: PropTypes.func,
    updateWishlist: PropTypes.func,
    showCart: PropTypes.bool,
    setActiveCartMenu: PropTypes.func,
    setShowWishlist: PropTypes.func,
}

Products.defaultProps = {
    products: [],
    setShowCart: () => { },
    updateCart: () => { },
    updateWishlist: () => { },
    showCart: false,
    setActiveCartMenu: () => { },
    setShowWishlist: () => { },
    isConfirmationPage: false,
    classNames: ""
}

export default Products;