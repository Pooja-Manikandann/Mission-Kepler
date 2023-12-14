import React, { ReactNode, createContext, useState } from 'react';
import { AUTH } from '../constants';

interface LoaderContextValue {
    loading: boolean;
    setLoading: Function;
}

type Props = {
    children: ReactNode;
};

export const LoaderContext = createContext<LoaderContextValue>({
    loading: false,
    setLoading: () => {},
});

/**
 * @description - context provider to know if the user is authorized
 * @param {*} param0
 * @returns context provider along with the values to be shared
 */
const LoaderContextProvider = ({ children }: Props) => {
    const [loading, setLoading] = useState(false);    
    return (
        <LoaderContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoaderContext.Provider>
    );
};

export default LoaderContextProvider;
