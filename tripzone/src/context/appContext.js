import React, { createContext, useCallback, useState } from 'react';
import useInput from '../hooks/useInput';
import getAvailableFlights from '../services/getAvailableFlights';
import getCityInformation from '../services/getCityInformation';
import getTouristSpots from '../services/getTouristSpots';

const AppContext = createContext();
const AppProvider = ({ children }) => {

    const [cityPromotion, setCityPromotion] = useState({});

    console.log("helloooo", cityPromotion)


    // console.log("availableFlightsavailableFlights", availableFlights)

    const valuesToExport = { cityPromotion, setCityPromotion }

    return <AppContext.Provider value={valuesToExport}>{children}</AppContext.Provider>

}

export { AppProvider };
export default AppContext;
