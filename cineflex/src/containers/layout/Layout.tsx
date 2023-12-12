import { layoutProps } from '../../modals/modal';
import Header from '../Header/Header';
import React from 'react';
const defaultProps = {
    children: <></>,
};

/**
 * @description - the component provides header component and the specifies child component
 * @param param - the children component that needs to be rendered inside the layout
 * @returns - layout that consists of header
 */
const Layout = ({ children }: layoutProps) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

Layout.defaultProps = defaultProps;

export default Layout;
