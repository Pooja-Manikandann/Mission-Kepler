import React from 'react';
import { useRecoilValue } from 'recoil';
import { errorMessageAtom } from '../../atoms/atom';
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
        <div className='article-error'>
            <h3 className='error'>{errorMessage}</h3>
        </div>
    );
};
export default ErrorFallbackUI;
