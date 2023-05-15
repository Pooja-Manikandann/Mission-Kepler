import React, { createContext, useState } from 'react';

const AppContext = createContext();
const AppProvider = ({ children }) => {

    const [cityPromotion, setCityPromotion] = useState({});

    const [showCityPromotion, setShowCityPromotion] = useState(false);

    const valuesToExport = { cityPromotion, setCityPromotion, showCityPromotion, setShowCityPromotion }

    return <AppContext.Provider value={valuesToExport}>{children}</AppContext.Provider>

}

export { AppProvider };
export default AppContext;
