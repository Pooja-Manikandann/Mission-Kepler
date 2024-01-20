import Axios from 'axios'
import { API_CONSTANTS } from 'src/constants'

export const getBlogs = async() => {
    const { GET_BLOGS } = API_CONSTANTS;
    const response = await Axios.get(GET_BLOGS);
    return response.data;
}