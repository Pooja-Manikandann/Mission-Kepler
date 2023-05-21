import { increamentOneHour, increamentOneMinute } from "../utils/getTime";

const useTimer = (min, hrs, estMinutes, estHours, setHours, setMinutes, setEstHours, setEstMinutes, setSessionTime) => {
    let counter = 0;
    setInterval(() => {
        min === 59 ? increamentOneHour(hrs, setHours, setMinutes) : estMinutes === 59 ? increamentOneHour(estHours, 0, setEstHours, setEstMinutes) : increamentOneMinute(min, estMinutes, setMinutes, setEstMinutes);
        setSessionTime(++counter);
    }, 60000);

}


export default useTimer;