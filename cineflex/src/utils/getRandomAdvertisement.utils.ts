import { ADVERTISEMENT_LIMIT } from '../constants';

const { SHORT_AD_URL, LARGE_AD_URL } = ADVERTISEMENT_LIMIT;

export const getRandomShortAdvertisement = () => {
    const max = LARGE_AD_URL.length;
    return SHORT_AD_URL[getRandomNumber(max)];
};

export const getRandomLargeAdvertisement = () => {
    const max = LARGE_AD_URL.length;
    return LARGE_AD_URL[getRandomNumber(max)];
};

export const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
};
