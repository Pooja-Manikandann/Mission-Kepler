import Axios from 'axios';
import { LOTTERY_URL } from '../constants';

export const checkForPrize = async (number: { lottery: '' }) => {
    const response = { data: '' };
    if (number && Number(number.lottery) % 2) {
        response.data = '';
    } else {
        response.data = 'Hurray! You won a free ticket to Blind Date on Wednesday';
    }
    return response;
};
