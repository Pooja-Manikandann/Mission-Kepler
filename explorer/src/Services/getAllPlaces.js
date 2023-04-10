import Axios from "axios"
import { GET_ALL_PLACES } from "../Constants/ApiConstants"

const getAllPlaces = async () => {
    const response = await Axios.get(GET_ALL_PLACES)
    if (response.status === 200) {
        return response.data;
    }
    return [];
}

export default getAllPlaces;