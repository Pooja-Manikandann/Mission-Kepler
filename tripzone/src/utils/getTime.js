import { MONTH_NAMES } from "../constants/monthConstants.constant";

function getFormattedDate(date) {
    let month = date.getMonth();
    return `${date.getDate()} ${MONTH_NAMES[month]} ${date.getFullYear() % 100}`;
}


function updateToTwoDigits(hours) {
    return hours < 10 ? `0${hours}` : `${hours}`;
}


function getDefaultTime(date) {
    const initialMinutes = updateToTwoDigits(date.getMinutes());
    const initialHours = updateToTwoDigits(date.getHours());
    const formattedDate = updateToTwoDigits(getFormattedDate(date));
    return { initialMinutes, initialHours, formattedDate };
}

function convertISDToEST(date) {
    const offset = date.getTimezoneOffset();
    const estDate = new Date(date.getTime() + offset * 60 * 1000);
    return estDate;
}


function increamentOneHour(hours, setHours, setMinutes) {
    setHours(parseInt(hours + 1));
    setMinutes(parseInt(0));
}

function increamentOneMinute(ISTMinutes, ESTMinutes, setISTMinutes, setESTMinutes) {
    setESTMinutes(parseInt(ESTMinutes) + 1);
    setISTMinutes(parseInt(ISTMinutes) + 1);
}

export { increamentOneHour, increamentOneMinute, getDefaultTime, convertISDToEST };