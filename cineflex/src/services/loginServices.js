import Axios from 'axios';
import { LOGIN_URL } from '../constants/index';

const loginService = async(data) => {
    return Axios.get(LOGIN_URL)
    .then((data) => data)
    .catch((error) => error)
}

export {loginService};