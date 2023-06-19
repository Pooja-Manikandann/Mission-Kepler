import { useContext } from "react";
import { UserContext } from "../context/User.context";
import { localStorageHelper } from "../utils/localStorage.util";
import { AUTH } from "../constants";

/**
 * @description - auth functions to update the context to confirm login and logout functionalites
 * @returns functions to update context
 */
export const useAuth = () => {
    const context = useContext(UserContext);
    const { set, remove } = localStorageHelper;
    const { setIsUserLoggedIn } = context;
    const { IS_USER_LOGGED_IN } = AUTH;
    /**
     * @returns return the context value of UserContext
     */
    const useAuthContext = () => {
        return context;
    };
    /**
     * @description updates the context and local storage that user is logged in
     */
    const setAuth = () => {
        setIsUserLoggedIn(true);
        set(IS_USER_LOGGED_IN, true);
    };
    /**
     * @description removes context and local storage that user logged out
     */
    const clearAuth = () => {
        setIsUserLoggedIn(false);
        remove(IS_USER_LOGGED_IN);
    }
    return {
        useAuthContext, setAuth, clearAuth
    }
};
