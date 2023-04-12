import Axios from 'axios';

const getCityInformation = async (cityCode) => {
    let response = await Axios.get(`https://nijin-server.vercel.app/api/tripzone/city/${cityCode}`)
    return response.data
}

export default getCityInformation;