import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.scss"
import { useParams } from "react-router-dom";

const Navbar = (props) => {
    const { categories } = props;
    const { categoryId } = useParams();
    return (
        <div className={styles.navbarWrapper}>
            {categories.map((category) => {
                return (
                    <div className={`${styles.navItem} ${categoryId === category.id && styles.active}`}>
                        <Link key={category.id} to={`/categories/${category.id}`}>{category.id}</Link>
                    </div>
                )

            })}
        </div>
    )
}

Navbar.defaultProps = {
    categories: {
        id: "",
        category: "",
        description: "",
        photo: ""
    }
}

Navbar.propTypes = {
    categories: PropTypes.array.isRequired
}

export default Navbar;