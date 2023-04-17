import Axios from 'axios';
import { GET_CITY_INFORMATION } from '../constants/apiConstants';

const getCityInformation = async (cityCode) => {
    let response = await Axios.get(`${GET_CITY_INFORMATION}${cityCode}`)
    if (response.data) {
        return response.data
    }
    return {};
}

export default getCityInformation;