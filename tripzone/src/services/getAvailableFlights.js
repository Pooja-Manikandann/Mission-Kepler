import Axios from 'axios'
import { GET_FLIGHTS } from '../constants/apiConstants';

const getAvailableFlights = async (source, destination) => {
    const response = await Axios.get(GET_FLIGHTS, {
        params: {
            src: source,
            dest: destination
        }
    })
    return response.data;
}

export default getAvailableFlights;