import React from "react";
import styles from "./Loader.module.scss"

import { RotatingLines } from 'react-loader-spinner'


const Loader = () => {
    return (
        <div className={styles.loader}>
            {/* React loader spinner */}
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    )
}

export default Loader;