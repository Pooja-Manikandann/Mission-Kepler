import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";
import styles from "./Layout.module.scss"

const Layout = (props) => {
    const { categories, children, isLoading } = props;

    return (
        <React.Fragment>
            {/* Shows loader till the API is completed */}
            {isLoading ? <div><Loader /></div> :
                <div>
                    <Header categories={categories} />
                    {/* main content changes based on each page  */}
                    <main className={styles.mainContentWrapper}>{children}</main>
                    <Footer />
                </div>}
        </React.Fragment>
    )
}

export default Layout;