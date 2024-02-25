import Axios from "axios"
import { API_CONSTANTS } from "src/constants"

export const getUsers = async() => {
    const response = await Axios.get(API_CONSTANTS.GET_USERS);
    return response.data;
}