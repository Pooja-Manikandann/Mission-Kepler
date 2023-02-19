import React from "react"
import Dashboard from "../../containers/dashboard/Dashboard";
import PropTypes from "prop-types"

const Homepage = (props) => {
    const { categories, setCategory } = props;

    return (
        <Dashboard categories={categories} setCategory={setCategory} />
    )
}

Homepage.propType = {
    categories: PropTypes.array,
}

Homepage.defaultProps = {
    categories: [],
}

export default Homepage