import Axios from 'axios'
import { API_CONSTANTS } from 'src/constants'
import { localStorageHelper } from 'src/utils/localStorage.util';

export const getBlogs = async() => {
    const { GET_BLOGS } = API_CONSTANTS;
    const response = await Axios.get(GET_BLOGS);

    const blogs = localStorageHelper.get('blogs');
    if(blogs?.length) return JSON.parse(blogs);
    return response.data;
}