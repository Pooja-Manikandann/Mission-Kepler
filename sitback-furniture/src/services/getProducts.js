import Axios from "axios";
import { GET_PRODUCTS } from "../constants/ApiConstants";

/**
 * 
 * @param {*} categoryId category id to fetch the products
 * @returns response from fetching product api
 */
export const getProducts = async (categoryId) => {
    let response = await Axios.get(GET_PRODUCTS, {
        params: { category: categoryId }
    })
    if (response.status === 200) {
        return response.data
    }
    return [];
}