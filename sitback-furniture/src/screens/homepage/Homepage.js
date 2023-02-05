import Header from "../../components/header/Header"
import React from "react"
import Dashboard from "../../containers/dashboard/Dashboard";
import PropTypes from "prop-types"

const Homepage = (props) => {
    const { categories, category, setCategory } = props;

    return (
        <div>
            <Header categories={categories} category={category} setCategory={setCategory} />
            <Dashboard categories={categories} />
        </div>
    )
}

Homepage.propType = {
    categories: PropTypes.array,
    category: PropTypes.string,
    setCategory: PropTypes.func
}

Homepage.defaultProps = {
    categories: [],
    category: "",
    setCategory: () => { }
}

export default Homepage