import React, { useContext, useState } from 'react';
import CustomLoader from 'src/components/CustomLoader/CustomLoader';
import { LoaderContext } from 'src/context/Loader.context';
const useLoader = () => {
    const context = useContext(LoaderContext);
    const { loading, setLoading } = context;

    const showLoader = () => {
        setLoading(true);
    };
    const hideLoader = () => {
        setLoading(false);
    };

    return {
        loading,
        showLoader,
        hideLoader,
    };
};
export default useLoader;
