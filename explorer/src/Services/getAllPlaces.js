import Axios from "axios"

const getAllPlaces = async () => {
    const response = await Axios.get("https://mocki.io/v1/1346c7d7-a7af-4b99-b095-1bc975857a06")
    console.log("response", response)
    if (response.status === 200) {
        return response.data;
    }
    return [];
}

export default getAllPlaces;