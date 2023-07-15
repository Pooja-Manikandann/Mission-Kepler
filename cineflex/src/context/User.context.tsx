import { ReactNode, createContext, useState } from 'react';

interface UserContextValue {
    isUserLoggedIn: boolean
    setIsUserLoggedIn: Function
  }

  
  type Props = {
      children: ReactNode,
  }
export const UserContext = createContext<UserContextValue>({
    isUserLoggedIn: false,
    setIsUserLoggedIn: () => { }
});

/**
 * @description - context provider to know if the user is authorized
 * @param {*} param0
 * @returns context provider along with the values to be shared
 */
const UserContextProvider = ({ children }: Props) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    return (
        <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;

