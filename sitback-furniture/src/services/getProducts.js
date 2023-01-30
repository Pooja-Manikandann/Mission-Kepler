import Axios from "axios";
import { useParams } from "react-router-dom";

export const getProducts = async (categoryId) => {
    // const { categoryId } = useParams();
    let response = await Axios.get("https://jsonmockserver.vercel.app/api/shopping/furniture/products", {
        params: { category: categoryId }
    })
    if (response.status === 200) {
        return response.data
    }
    return [];
}