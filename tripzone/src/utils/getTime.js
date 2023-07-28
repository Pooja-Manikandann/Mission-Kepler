import { MONTH_NAMES } from "../constants/monthConstants.constant";

function getFormattedDate(date) {
    let month = date.getMonth();
    return `${date.getDate()} ${MONTH_NAMES[month]} ${date.getFullYear() % 100}`;
}


function updateToTwoDigits(hours) {
    return hours < 10 ? `0${hours}` : `${hours}`;
}


function getDefaultTime() {
    const date = new Date();
    const est = convertISDToEST(date);
    return {
        ist: getTimings(date),
        est: getTimings(est)
    }
}

function getTimings(currentDate) {
    const minutes = updateToTwoDigits(currentDate.getMinutes());
    const hours = updateToTwoDigits(currentDate.getHours());
    const date = getFormattedDate(currentDate);
    return { minutes, hours, date };
}

function convertISDToEST(date) {
    const offset = date.getTimezoneOffset();
    const estDate = new Date(date.getTime() + offset * 60 * 1000);
    return estDate;
}


export {getDefaultTime, updateToTwoDigits };