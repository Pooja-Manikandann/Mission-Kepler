import React from "react"
import styles from "./PromoBanner.module.scss";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { PROMO_BANNER_TITLE, PROMO_BANNER_CAPTION } from "../../Constants/PromoBannerConstants";


const PromoBanner = (props) => {

    const { places } = props;

    return (
        <div className={styles.promoBannerWrapper}>
            <div className={styles.promoWrapper}>
                <div className={styles.promoTextWrapper}>
                    <div className={styles.welcomeContent}>{PROMO_BANNER_TITLE}</div>
                    <div className={styles.captionContent} dangerouslySetInnerHTML={{ __html: PROMO_BANNER_CAPTION }} />
                </div>
                <div className={styles.dropdownWrapper}>
                    <Dropdown places={places} className="dropdownSelect" />
                    <Button label="Explore" className="banner-explore" />
                </div>
            </div>
            <div className={styles.bannerWrapper}>
                <img src="https://cdn.dribbble.com/users/63407/screenshots/5903783/dribbble_india_stories_leh.png?compress=1&resize=800x600&vertical=top" alt="banner" className={styles.bannerImage} />

            </div>
        </div>
    )
}

PromoBanner.propTypes = {
    places: PropTypes.arrayOf(PropTypes.shape({
        caption: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.string,
        place: PropTypes.string
    })),
}

PromoBanner.defaultProps = {
    places: [{
        caption: "",
        description: "",
        id: "",
        place: ""
    }]
}

export default PromoBanner;