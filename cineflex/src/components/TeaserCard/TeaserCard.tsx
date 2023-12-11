import React, { useEffect, useRef } from 'react';
import { teaserProps } from '../../modals/modal';
import styles from './TeaserCard.module.scss';
import WithAdvertisement from '../WithAdvertisement/WithAdvertisement';
import { FaPlay, FaPlayCircle } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import { timerAtom } from '../../atoms/atom';
import { formatNumberTwoDigits } from '../../utils/format.utils';
import { APP_CONSTANTS } from '../../constants';

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

    const toggleVideo = () => {
        if (ref?.current?.paused) {
            ref.current.currentTime = adStatus ? 6 : 0;
            ref?.current?.play();
            const element = playIconRef.current || { className: '' };
            element.className = styles.hide;
        }
        onclick(true);
    };

    useEffect(() => {
        if (limit === -3) {
            toggleVideo();
        }
    }, [limit]);

    const controlVideo = () => {
        if (ref?.current?.paused) {
            toggleVideo();
        } else {
            ref?.current?.pause();
            const element = playIconRef.current || { className: '' };
            element.className = styles.show;
            onclick(false);
        }
    };

    return (
        <div key={id} className={styles.teaserWrapper}>
            <div className={styles.videoWrapper} onClick={controlVideo}>
                <video src={videoSrc} poster={POSTER_URL} ref={ref}>
                    <source src={videoSrc} type='video/mp4' />
                </video>
                <div ref={playIconRef}>
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
