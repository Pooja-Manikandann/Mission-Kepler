import React, { useRef } from 'react';
import styles from './ShowTime.module.scss';
import { APP_CONSTANTS } from '../../constants';
import { FaPlayCircle } from 'react-icons/fa';
import { useVideoController } from 'src/hooks/useVideoController';

/**
 * @description renders now showing page
 * @returns now showing page
 */
const ShowTime = () => {
    const { SINTEL_TITLE, SINTEL_DESCRIPTION } = APP_CONSTANTS.TRAILER;
    const { TITLE, VIDEO_URL, POSTER_URL } = APP_CONSTANTS.NOW_SHOWING;
    const playIconRef = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLVideoElement>(null);
    const { playVideo } = useVideoController(ref, playIconRef);

    return (
        <div className={styles.nowShowingSection}>
            <h3>{TITLE}</h3>
            <h1 className={styles.movieTitle}>{SINTEL_TITLE}</h1>
            <div>
                <div className={styles.videoWrapper}>
                    <video poster={POSTER_URL} ref={ref} data-testid='video'>
                        <source src={VIDEO_URL}></source>
                    </video>
                    <div
                        data-testid='icon'
                        className={styles.iconWrapper}
                        onClick={() => playVideo(0, true)}
                        ref={playIconRef}
                    >
                        <FaPlayCircle />
                    </div>
                </div>
                <p className={styles.description}>{SINTEL_DESCRIPTION}</p>
            </div>
        </div>
    );
};

export default ShowTime;
