import React from "react";
import Button from "../Button/Button";
import { SMALL_VARIANT } from "../../constants/appConstants.constant";
import styles from "./ButtonGroup.module.scss"
import PropTypes from "prop-types";

const ButtonGroup = (props) => {
    const { items, onClick } = props;

    return (
        <div className={styles.buttonsWrapper}>
            {items.map((item, index) => (
                <Button label={item.name} key={index} variant={SMALL_VARIANT} onClick={() => { onClick(item.increamentValue) }} />
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