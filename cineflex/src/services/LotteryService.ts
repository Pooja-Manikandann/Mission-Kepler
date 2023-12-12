import Axios from 'axios';
import { LOTTERY_URL } from '../constants';

export const checkForPrize = async (number: { lottery: '' }) => {
    // let response = await Axios.get(`${LOTTERY_URL}?${number}`);
    const response = { data: '' };
    if (number && Number(number.lottery) % 2) {
        response.data = '';
    } else {
        response.data = 'Hurray! You won a free ticket to Blind Date on Wednesday';
    }
    return response;
};
