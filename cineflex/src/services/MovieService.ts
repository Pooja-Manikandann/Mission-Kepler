import Axios from 'axios';
import { ALL_MOVIES } from '../constants';
import { localStorageHelper } from '../utils/localStorage.util';

export const getMovies = async (pageNo: number) => {
    const { get, set } = localStorageHelper;

    let data = JSON.parse(get('movies') || '[]');

    if (!data || !data[0]) {
        const response = await Axios.get(ALL_MOVIES);
        data = response.data.map((movie: object) => {
            return { ...movie, isLiked: false };
        });

        set('movies', data);
    }

    return data.slice(0, pageNo * 6);
};
