import { ERROR_HANDLER_IMG_URL } from "../constants/appConstants.constant";

const errorImageProvider = (e) => {
    e.target.src = ERROR_HANDLER_IMG_URL
}

export default errorImageProvider;