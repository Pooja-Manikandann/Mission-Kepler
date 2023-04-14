import Axios from 'axios';

const getTouristSpots = async (cityCode) => {
    let response = await Axios.get(`https://nijin-server.vercel.app/api/tripzone/tourism/${cityCode}`)
    return response.data;
}

export default getTouristSpots;