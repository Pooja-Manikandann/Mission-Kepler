import Axios from 'axios';
import { LOGIN_URL } from '../constants';

const loginService = async (data) => {
    console.log('login', data);
    return Axios.get(LOGIN_URL)
        .then((data) => data)
        .catch((error) => error);
};

export { loginService };
