import React, { createContext, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const valuesToExport = { user, setUser }

    return <LoginContext.Provider value={valuesToExport}>{children}</LoginContext.Provider>
}

export { LoginProvider };

export default LoginContext;