import Axios from 'axios';
import { GET_TOURIST_SPOTS } from '../constants/apiConstants';

const getTouristSpots = async (cityCode) => {
    let response = await Axios.get(`${GET_TOURIST_SPOTS}${cityCode}`)
    return response.data;
}

export default getTouristSpots;