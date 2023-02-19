import React from "react";
import { FOOTER_COPYRIGHTS } from "../../constants/AppConstants";
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            {FOOTER_COPYRIGHTS}
        </footer>
    )
}

export default Footer;