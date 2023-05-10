import React, { createContext, useState, useCallBack } from 'react';
import loginInUser from '../services/loginInUser';


const LoginContext = createContext();

const Provider = ({ children }) => {

    const [user, setUser] = useState({});

    // const loginUser = async (userName, password) => {
    //     let userResponse = await loginInUser(userName, password);
    //     setUser(userResponse);
    // }

    const valuesToExport = { user, setUser }

    return <LoginContext.Provider value={valuesToExport}>{children}</LoginContext.Provider>
}

export { Provider };

export default LoginContext;