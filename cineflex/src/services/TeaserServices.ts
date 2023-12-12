import Axios from 'axios';
import { SHORT_TEASERS_URL } from '../constants';

export const getShortTeasers = async () => {
    const response = await Axios.get(SHORT_TEASERS_URL);
    return response.data;
};
