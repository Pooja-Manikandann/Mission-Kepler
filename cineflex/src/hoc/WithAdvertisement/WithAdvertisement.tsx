import React, { useEffect, useRef, useState } from 'react';
import AdvertisementCard from '../../components/AdvertisementCard/AdvertisementCard';
import { ADVERTISEMENT_LIMIT } from '../../constants';
import {
    getRandomLargeAdvertisement,
    getRandomNumber,
    getRandomShortAdvertisement,
} from '../../utils/getRandomAdvertisement.utils';

/**
 * @description HOC wraps the child component with the advertisement
 * @param Component child which needs to be wrapped by advertisement
 * @returns wrapped component with advertisement
 */
const WithAdvertisement = (Component: any) => {
    const Advertisement = (props: any) => {
        const { adStartTiming, adDuration, adUrl, resetAdvertisement } = props;
        const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
        const videoRef = useRef<HTMLVideoElement>(null);
        const [showAdvertisement, setShowAdvertisement] = useState<boolean>(false);
        const [isAdShown, setIsAdShown] = useState<boolean>(false);
        const [limit, setLimit] = useState<number>(-2);
        const [imageUrl, setImageUrl] = useState<string>('');
        const { LIMIT_5S } = ADVERTISEMENT_LIMIT;

        /**
         * @description function that enables all state to show ad
         */
        const showAd = () => {
            setShowAdvertisement(true);
            setIsVideoPlaying(false);
            setLimit(adDuration);
            setImageUrl(adUrl);
        };

        /**
         * @description function that disables all state to hide ad
         */
        const hideAd = () => {
            setShowAdvertisement(false);
            setIsAdShown(true);
            setIsVideoPlaying(true);
            setLimit(-3);
        };

        /**
         * @description function called when the video starts to play
         * @param currentVideoStatus - status that mentions the video play status
         */
        const handleClick = (currentVideoStatus: boolean) => {
            setIsVideoPlaying(currentVideoStatus);
            setLimit(limit > 0 ? limit : adStartTiming);
        };

        const resetAd = () => {
            setShowAdvertisement(false);
            setIsAdShown(false);
            setIsVideoPlaying(true);
            setLimit(adStartTiming);
        };

        /**
         * counter based on which the showing and hiding of ad starts
         */
        useEffect(() => {
            let id: number | any;
            if (!isAdShown) {
                if (limit >= -1 && (isVideoPlaying || showAdvertisement)) {
                    id = setTimeout(() => {
                        setLimit(limit - 1);
                    }, 1000);
                    if (limit === 0) {
                        if (isVideoPlaying) {
                            showAd();
                        } else {
                            hideAd();
                        }
                    }
                }
            }
            return () => {
                clearTimeout(id);
            };
        }, [isVideoPlaying, limit, showAdvertisement, isAdShown]);

        useEffect(() => {
            if (resetAdvertisement) resetAd();
        }, [resetAdvertisement]);
        return showAdvertisement ? (
            <AdvertisementCard
                imageUrl={imageUrl}
                alt='advertisement'
                title={props.title}
                limit={limit}
                size={adDuration === LIMIT_5S ? 'large' : 'small'}
            />
        ) : (
            <Component
                {...props}
                onclick={handleClick}
                videoStatus={isVideoPlaying}
                adStatus={isAdShown}
                videoRef={videoRef}
                limit={limit}
                setAdStatus={setIsAdShown}
            />
        );
    };
    return Advertisement;
};

export default WithAdvertisement;
