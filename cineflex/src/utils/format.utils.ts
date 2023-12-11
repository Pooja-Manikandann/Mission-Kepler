export const formatNumberTwoDigits = (number: Number) => {
    return number.toLocaleString('en-US', { minimumIntegerDigits: 2 });
};
