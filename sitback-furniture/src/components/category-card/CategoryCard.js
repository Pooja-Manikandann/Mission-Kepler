import React from 'react'
import Button from '../Button/Button';
import styles from "./CategoryCard.module.scss"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { SHOP_NOW } from '../../constants/AppConstants';
import { defaultImageProvider } from '../../utils/defaultImageProvider';
import { CATEGORIES } from '../../constants/PathConstants';

const CategoryCard = (props) => {
    const { category } = props;
    return (
        <div className={styles.categoryCardWrapper}>
            <img src={category.photo} alt="category" onError={defaultImageProvider} />
            <h2 className={styles.categoryTitle}>{category.category}</h2>
            <p className={styles.categoryDescription}>{category.description}</p>
            {/* Link tag to navigate to shopping page based on the categories choosed  */}
            <Link to={`${CATEGORIES}${category.id}`} className="btn btn-primary"><Button label={SHOP_NOW} /></Link>
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