import React from 'react';
import styles from './PageNotFound.module.scss';

export const PageNotFound = () => {
    return (
        <div className={styles.pageNotFoundWrapper}>
            <h2>404</h2>
            <h3>Sorry, we couldn't find this page !!</h3>
        </div>
    );
};
