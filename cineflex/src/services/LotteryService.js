import Axios from 'axios';
import { LOTTERY_URL } from '../constants';

export const checkForPrize = async (number) => {
    let response = await Axios.get(`${LOTTERY_URL}?${number}`);
    return response;
};
