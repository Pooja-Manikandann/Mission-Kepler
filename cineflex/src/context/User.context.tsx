import React, { ReactNode, createContext, useState } from 'react';
import { localStorageHelper } from '../utils/localStorage.util';
import { AUTH } from '../constants';

interface UserContextValue {
    isUserLoggedIn: boolean;
    setIsUserLoggedIn: Function;
}

type Props = {
    children: ReactNode;
};

export const UserContext = createContext<UserContextValue>({
    isUserLoggedIn: false,
    setIsUserLoggedIn: () => {},
});

/**
 * @description - context provider to know if the user is authorized
 * @param {*} param0
 * @returns context provider along with the values to be shared
 */
const UserContextProvider = ({ children }: Props) => {
    const { get } = localStorageHelper;
    const { IS_USER_LOGGED_IN } = AUTH;
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(JSON.parse(get(IS_USER_LOGGED_IN)|| 'null') || false);
    return (
        <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
