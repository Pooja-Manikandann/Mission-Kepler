import React from "react";
import ProductCard from "../../components/product-card/ProductCard";
import styles from "./Products.module.scss"

const Products = (props) => {
    const { products } = props;
    return (
        <div className={styles.productsWrapper}>
            {products.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
    )
}

export default Products;