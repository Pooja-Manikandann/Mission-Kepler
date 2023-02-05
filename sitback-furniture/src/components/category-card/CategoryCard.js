import React from 'react'
import Button from '../Button/Button';
import styles from "./CategoryCard.module.scss"
import PropTypes from "prop-types"

const CategoryCard = (props) => {
    const { category } = props;
    function handleClick(category) {
        window.location.href = `http://localhost:3000/categories/${category}`
    }
    return (
        <div className={styles.categoryCardWrapper}>
            <img src={category.photo} alt="category" />
            <h2 className={styles.categoryTitle}>{category.category}</h2>
            <p className={styles.categoryDescription}>{category.description}</p>
            <Button label="SHOP NOW" onClick={() => handleClick(category.id)} />
        </div>
    )
}

CategoryCard.defaultProps = {
    category: ""
}

CategoryCard.propType = {
    category: PropTypes.string
}

export default CategoryCard;