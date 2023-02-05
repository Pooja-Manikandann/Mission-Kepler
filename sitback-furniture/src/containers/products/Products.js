import React from "react";
import ProductCard from "../../components/product-card/ProductCard";
import styles from "./Products.module.scss"
import PropTypes from "prop-types"

const Products = (props) => {
    const { products, setShowCart, updateCart, updateWishlist, showCart, setActiveCartMenu, setShowWishlist } = props;
    function updateShowCart() {
        setShowCart(true)
        setActiveCartMenu("mycart");
    }

    function updateShowWishList() {
        setShowWishlist(true);
        setActiveCartMenu("mywishlist");
    }

    return (
        <div className={`${styles.productsWrapper} ${showCart ? styles.threeColumnLayout : ""}`}>
            {products.map((product) => (
                <ProductCard product={product} key={product.id} layout={showCart ? "threeColumnCard" : "fourColumnCard"} setShowCart={updateShowCart} setShowWishlist={updateShowWishList} updateCart={updateCart} updateWishlist={updateWishlist} />
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
}

export default Products;