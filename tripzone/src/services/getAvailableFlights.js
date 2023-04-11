import Axios from 'axios'

const getAvailableFlights = async (source, destination) => {
    const response = await Axios.get("https://nijin-server.vercel.app/api/tripzone/flights", {
        params: {
            src: source,
            dest: destination
        }
    })
    return response.data;
}

export default getAvailableFlights;