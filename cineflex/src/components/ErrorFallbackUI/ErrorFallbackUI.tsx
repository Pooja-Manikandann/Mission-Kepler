import React from 'react';
import { useRecoilValue } from 'recoil';
import { errorMessageAtom } from '../../atoms/atom';
import styles from './ErrorFallbackUI.module.scss'
type Props = {
    errorMessage?: string;
};

/**
 * @description function to render Error fallback UI
 * @returns error fallback component 
 */
const ErrorFallbackUI = () => {
    const errorMessage = useRecoilValue(errorMessageAtom);
    return (
        <div className={styles.articleError}>
            <h3 className='error'>{errorMessage}</h3>
        </div>
    );
};
export default ErrorFallbackUI;
