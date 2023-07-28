import React from 'react';
import styles from './Box.module.scss'

const Box = (props) => {
    const { subtitle, content } = props;
    return (
        <div className={styles.box}>
            <span className={styles.subtitle}>{subtitle}</span>
            <span className={styles.content}>{content}</span>
        </div>
    )
}

export default Box;