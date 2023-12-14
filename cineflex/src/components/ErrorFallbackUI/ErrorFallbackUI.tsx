import React from 'react';
import styles from './ErrorFallbackUI.module.scss';
import { APP_CONSTANTS } from 'src/constants';
type Props = {
    errorMessage?: string;
};

/**
 * @description function to render Error fallback UI
 * @returns error fallback component
 */
const ErrorFallbackUI = ({ errorMessage }: Props) => {
    const { ERROR_MESSAGE } = APP_CONSTANTS.LOTTERY;
    return (
        <div className={styles.articleError}>
            <h3 className='error'>{ERROR_MESSAGE}</h3>
        </div>
    );
};
export default ErrorFallbackUI;
