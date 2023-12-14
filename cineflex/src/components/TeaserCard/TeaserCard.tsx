import React, { useEffect, useRef } from 'react';
import { teaserProps } from '../../modals/modal';
import styles from './TeaserCard.module.scss';
import WithAdvertisement from '../../hoc/WithAdvertisement/WithAdvertisement';
import { FaPlay, FaPlayCircle } from 'react-icons/fa';
import { formatNumberTwoDigits } from '../../utils/format.utils';
import { APP_CONSTANTS } from '../../constants';
import { useVideoController } from 'src/hooks/useVideoController';

function TeaserCard({
    id,
    title,
    videoSrc,
    onclick,
    adStatus,
    videoStatus,
    limit,
}: teaserProps) {
    const ref = useRef<HTMLVideoElement>(null);
    const playIconRef = useRef<HTMLDivElement>(null);
    const { POSTER_URL } = APP_CONSTANTS.SHORT_TEASERS;
    const { playVideo, pauseVideo } = useVideoController(ref, playIconRef);

    const playVideoHandler = () => {
        playVideo(adStatus ? 6 : 0);
        onclick(true);
    };

    useEffect(() => {
        if (limit === -3) {
            playVideoHandler();
        }
    }, [limit]);


    const controlVideo = () => {
        if (ref?.current?.paused) {
            playVideoHandler();
        } else {
            pauseVideo();
            onclick(false);
        }
    };

    return (
        <div key={id} className={styles.teaserWrapper}>
            <div className={styles.videoWrapper}  onClick={controlVideo}>
                <video data-testid='video' src={videoSrc} poster={POSTER_URL} ref={ref}>
                    <source src={videoSrc} type='video/mp4' />
                </video>
                <div data-testid='icon' ref={playIconRef}>
                    <FaPlayCircle />
                </div>
            </div>
            <p className={styles.teaserTitle}>{title}</p>

            {!adStatus && limit && limit >= 0 && (
                <span className={styles.adLabel}>
                    Advertisement starts in 00:{formatNumberTwoDigits(limit)}
                </span>
            )}
        </div>
    );
}

export default WithAdvertisement(TeaserCard);
