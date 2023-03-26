import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";
import styles from "./Layout.module.scss"
import PropTypes from "prop-types"

const Layout = (props) => {
    const { categories, children, isLoading } = props;

    return (
        <React.Fragment>
            {/* Shows loader till the API is completed */}
            <div>
                <Header categories={categories} />
                {/* main content changes based on each page  */}
                {isLoading ? <div><Loader /></div> :
                    <main className={styles.mainContentWrapper}>{children}</main>}
                <Footer />
            </div>
        </React.Fragment>
    )
}

Layout.defaultProps = {
    categories: [{
        id: "",
        photo: "",
        category: "",
        description: ""
    }],
    isLoading: false
}

Layout.propType = {
    categories: PropTypes.array,
    isLoading: PropTypes.bool
}

export default Layout;