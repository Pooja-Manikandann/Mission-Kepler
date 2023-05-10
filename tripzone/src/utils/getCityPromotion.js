import getCityInformation from "../services/getCityInformation";
import getTouristSpots from "../services/getTouristSpots";

async function updateCityInformation(destination) {
    let response = await getCityInformation(destination);
    return response;
}

async function updateTouristSpotInformation(destination) {
    let response = await getTouristSpots(destination);
    return response;
}

const getCityPromotion = async (cityCode) => {
    if (cityCode) {
        let data = {};
        data.cityInformation = await updateCityInformation(cityCode);
        data.touristSpots = await updateTouristSpotInformation(cityCode);
        return data;
    }
    return {}
}

export { getCityPromotion };