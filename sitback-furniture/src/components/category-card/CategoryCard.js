import React from 'react'
import Button from '../button/Button';
import styles from "./CategoryCard.module.scss"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { SHOP_NOW } from '../../constants/AppConstants';
import { defaultImageProvider } from '../../utils/defaultImageProvider';

const CategoryCard = (props) => {
    const { category, setCategory } = props;
    function handleClick(category) {
        setCategory(category)
    }
    return (
        <div className={styles.categoryCardWrapper}>
            <img src={category.photo} alt="category" onError={defaultImageProvider} />
            <h2 className={styles.categoryTitle}>{category.category}</h2>
            <p className={styles.categoryDescription}>{category.description}</p>
            {/* Link tag to navigate to shopping page based on the categories choosed  */}
            <Link to={`/categories/${category.id}`} className="btn btn-primary"><Button label={SHOP_NOW} onClick={() => handleClick(category.id)} /></Link>
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