import { ERROR_IMAGE_URL } from "../constants/AppConstants"

export const defaultImageProvider = (e) => {
    e.target.src = ERROR_IMAGE_URL
}