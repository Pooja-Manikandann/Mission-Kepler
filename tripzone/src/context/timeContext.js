import React, { createContext, useState } from "react";
import { getDefaultTime } from "../utils/getTime";

const TimeContext = createContext();

const TimeProvider = ({children}) => {
    const {ist, est} = getDefaultTime();

    const [istTime, setIstTime] = useState({...ist})
    const [estTime, setEstTime] = useState({...est})
    const [sessionTime, setSessionTime] = useState(0);
    const [session, setSession] = useState('0 MIN')
    console.log("istTimeistTime", istTime)

    const valuesToExport = { istTime, setIstTime, estTime, setEstTime, session, setSession, sessionTime, setSessionTime }
    return <TimeContext.Provider value={valuesToExport}>{children}</TimeContext.Provider>

}
export {TimeProvider};
export default TimeContext;