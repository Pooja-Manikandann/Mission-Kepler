import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../components/header/Header";
import Products from "../../containers/products/Products";
import { getProducts } from "../../services/getProducts";

const CategoriesPage = (props) => {
    const { categories } = props;
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            let products = await getProducts(categoryId);
            setProducts(products);
        }
        fetchProducts();
    }, [categoryId])
    return (
        <div>
            <Header categories={categories} />
            <Products products={products} />
        </div>
    )
}

export default CategoriesPage;