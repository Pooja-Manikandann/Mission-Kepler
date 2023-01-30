import Header from "../../components/header/Header"
import React, { useEffect, useState } from "react"
import getCategories from "../../services/getCategories";
import Dashboard from "../../containers/dashboard/Dashboard";

const Homepage = (props) => {
    const { categories } = props;
    // const [categories, setCategories] = useState([])
    // useEffect(() => {

    //     const updateCategories = async () => {
    //         let categories = await getCategories();
    //         categories = Array.from(categories)
    //         setCategories(categories);
    //     }
    //     updateCategories();

    // }, [])
    return (
        <div>

            <Header categories={categories} />
            <Dashboard categories={categories} />
        </div>
    )
}

export default Homepage