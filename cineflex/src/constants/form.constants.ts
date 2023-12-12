export const FORM_CONSTANTS = {
    LOGIN_FORM: {
        TITLE: 'Login',
        CAPTION:
            'Logging into CineFLEX will give you access to full videos and movies. You can sit back, relax and watch at your home.',
        FORM_LABELS: {
            EMAIL: {
                LABEL: 'Email',
                TYPE: 'email',
                NAME: 'email',
            },
            PASSWORD: {
                LABEL: 'Password',
                TYPE: 'password',
                NAME: 'password',
            },
        },
        FORM_ATTRIBUTES: ['email', 'password'],
    },
    LOTTERY_FORM: {
        LABEL: 'Your Mobile Number can win you exciting prices',
        SUCCES_MESSAGE: 'Hurray! You won a free ticket to Blind Date on Wednesday',
        FAILED_MESSAGE: 'Sorry :( Better luck next time',
        BUTTON_LABEL: `I'm feeling lucky`,
        PLACE_HOLDER: 'Enter Mobile Number',
        NAME: 'lottery',
        TYPE: 'tel',
    },
    VARIANT: {
        COLUMN: 'column',
        ROW: 'row',
    },
    THEME: {
        WHITE: 'white',
    },
    BORDER: {
        BOTTOM: 'bottom',
    },
    COLOR: {
        YELLOW: 'yellow',
        RED: 'red',
    },
};
