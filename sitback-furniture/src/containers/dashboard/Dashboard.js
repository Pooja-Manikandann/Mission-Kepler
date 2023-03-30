import React from "react";
import CategoryCard from "../../components/category-card/CategoryCard";
import styles from "./Dashboard.module.scss";
import PropTypes from "prop-types";


const Dashboard = (props) => {
    const { categories, classNames } = props;
    return (
        <div className={`${styles.dashboardWrapper} ${styles[classNames]}`}>
            <h1 className={styles.title}>Your Home, With Love</h1>
            <h2 className={styles.caption}>Come, Choose from millions of products</h2>
            <div className={styles.categoryWrapper}>
                {/* iterates through categories and returns each category card*/}
                {
                    categories.map((category, index) => {
                        return <CategoryCard category={category} key={index} />
                    })
                }
            </div>
        </div>
    )
}


Dashboard.defaultProps = {
    categories: {
        id: "",
        category: "",
        description: "",
        photo: ""
    },
    className: ""

}

Dashboard.propTypes = {
    // categories: PropTypes.object,
    className: PropTypes.string
}

export default Dashboard;
