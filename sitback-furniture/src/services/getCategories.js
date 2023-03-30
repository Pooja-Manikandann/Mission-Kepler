import Axios from "axios";
import { GET_CATEGORIES } from "../constants/ApiConstants";

/**
 * 
 * @returns response from fetcging categories
 */
const getCategories = async () => {

    let response = await Axios.get(GET_CATEGORIES)
    if (response.status === 200) {
        return response.data;
    }
    else {
        return [];
    }
}

export default getCategories;