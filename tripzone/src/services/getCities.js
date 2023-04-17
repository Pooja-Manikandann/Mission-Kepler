import Axios from "axios"
import { GET_CITIES } from "../constants/apiConstants";

const getCities = async () => {
    let response = await Axios.get(GET_CITIES)
    return response.data;
}

export default getCities;