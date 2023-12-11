export const VALIDATIONS = {
    EMAIL: {
        REGEX: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        MESSAGE: 'Enter a valid email',
    },
    MOBILE_NUMBER: {
        REGEX: /^[0-9]{10}$/,
        MESSAGE: 'Enter a valid mobile number',
    },
};
