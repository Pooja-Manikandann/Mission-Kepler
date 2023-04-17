import React from "react";
import Button from "../button/Button";
import { SMALL_VARIANT } from "../../constants/appConstants";
import styles from "./ButtonGroup.module.scss"
import PropTypes from "prop-types";

const ButtonGroup = (props) => {
    const { items } = props;
    return (
        <div className={styles.buttonsWrapper}>
            {items.map((item, index) => (
                <Button label={item.name} key={index} variant={SMALL_VARIANT} />
            ))}

        </div>
    )
}

ButtonGroup.defaultProps = {
    items: {}
}

ButtonGroup.propType = {
    items: PropTypes.array
}

export default ButtonGroup;