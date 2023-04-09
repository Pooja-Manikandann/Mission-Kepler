import Axios from "axios"

const getCities = async () => {
    let response = await Axios.get("https://nijin-server.vercel.app/api/tripzone/cities")
    return response.data;
}

export default getCities;