import { createContext, useState } from "react"

export const UserContext = createContext();
/**
 * @description - context provider to know if the user is authorized
 * @param {*} param0 
 * @returns context provider along with the values to be shared
 */
const UserContextProvider = ({children}) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState();
    return <UserContext.Provider value={{isUserLoggedIn, setIsUserLoggedIn}}>{children}</UserContext.Provider>
};

export default UserContextProvider;