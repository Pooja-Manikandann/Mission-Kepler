import { useContext } from "react";
import { updateToTwoDigits } from "../utils/getTime";
import TimeContext from "../context/timeContext";

const useTimerHook = () => {

    const {istTime, setIstTime, estTime, setEstTime, setSession, sessionTime, setSessionTime} = useContext(TimeContext);

    function increamentOneHour(timezone) {
        let hours;
        let minutes;
        switch(timezone) {
            case 'ist':
                hours = updateToTwoDigits(parseInt(istTime.hours) + 1);
                minutes = updateToTwoDigits(0)
                setIstTime({...istTime, hours, minutes})
                break;
            case 'est':
                hours = updateToTwoDigits(parseInt(estTime.hours) + 1);
                minutes = updateToTwoDigits(0)
                setEstTime({...estTime, hours, minutes})
                break;
            default:
                break;
        }
    }

    function updateSessionTime() {
        setSessionTime(sessionTime+1)
        const sessionHours = Math.trunc(sessionTime / 60);
        const sessionMinutes = sessionTime % 60;
        let session = sessionHours && sessionMinutes ? `${sessionHours}HR ${sessionMinutes}MIN` : sessionHours ? `${sessionHours}HR` : sessionMinutes ? `${sessionMinutes}MIN` : `0 MIN`
        setSession(session);
    }
    
    function isOneHourReached() {
        if(parseInt(istTime.minutes) === 59) {
            increamentOneHour('ist');
            return true;
        }
        if(parseInt(estTime.minutes) === 59) {
            increamentOneHour('est');
            return true;
        }
        return false;
    }

    const increamentOneMinute = () => {
        if(isOneHourReached()) return;
        let minutes = updateToTwoDigits(parseInt(istTime.minutes) + 1);
        setIstTime({...istTime, minutes: minutes});
        minutes = updateToTwoDigits(parseInt(estTime.minutes) + 1);
        setEstTime({...estTime, minutes: minutes});
        updateSessionTime();
    }
    
    return {
     increamentOneMinute
    }
}

export default useTimerHook;