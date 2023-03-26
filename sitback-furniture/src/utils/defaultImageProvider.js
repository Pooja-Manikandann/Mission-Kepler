import { ERROR_IMAGE_URL } from "../constants/AppConstants"

/**
 * 
 * @param {*} e 
 */
export const defaultImageProvider = (e) => {
    e.target.src = ERROR_IMAGE_URL
    e.target.alt = "sitback furniture"
}