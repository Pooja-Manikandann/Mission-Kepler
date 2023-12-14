import { ADVERTISEMENT_LIMIT, APP_CONSTANTS } from '../../constants/';
import styles from './MovieDescription.module.scss';
import { FaThumbsUp } from 'react-icons/fa';
import React, { useEffect } from 'react';
import { movieDescriptionProps } from '../../modals/modal';
import WithAdvertisement from '../../hoc/WithAdvertisement/WithAdvertisement';
import { formatNumberTwoDigits } from '../../utils/format.utils';

export const defaultProps = {
    movieDetails: {
        id: '0',
        movie: '',
        likes: '0',
        decription: '',
        actors: [''],
    },
    updateLike: () => {},
};

const MovieDescription = ({
    resetAdvertisement,
    advertisement,
    movieDetails,
    updateLike,
    onclick,
    limit,
    setAdStatus,
    setResetAdvertisement,
}: movieDescriptionProps) => {
    const { movie, likes, description, actors, link, id, isLiked } = movieDetails;
    const { LIKES, ACTORS, MOVIE_POSTER, FALLBACK_TEXT } = APP_CONSTANTS.ALL_MOVIES;
    const { ADVERTISEMENT_LABEL } = ADVERTISEMENT_LIMIT;

    useEffect(() => {
        if (movie && resetAdvertisement) {
            onclick(true);
            setResetAdvertisement(false);
            setAdStatus(false);
        }
    }, [movie]);

    return (
        <>
            {movieDetails.movie ? (
                <div className={styles.movieDescriptionSection}>
                    <div className={styles.movieDescriptionHeader}>
                        <h2 className={styles.movieName}>{movie}</h2>
                        <div
                            data-testid='like'
                            className={`${styles.likeIconWrapper} ${
                                isLiked && styles.liked
                            }`}
                            onClick={() => updateLike(id, Number(likes) + 1)}
                        >
                            <FaThumbsUp />
                        </div>
                    </div>
                    <h5 className={styles.movieLikes}>
                        {likes} {LIKES}
                    </h5>
                    <img
                        className={styles.moviePosterImage}
                        src={link}
                        alt={MOVIE_POSTER}
                    />
                    <p className={styles.movieDescription}>{description}</p>
                    <div className={styles.actorsWrapper}>
                        <h4 className={styles.actorTitle}>{ACTORS}</h4>
                        <div className={styles.actorsContent}>
                            {actors.map((actor, index) => (
                                <p key={index} className={styles.actorName}>
                                    {actor}
                                </p>
                            ))}
                        </div>
                    </div>
                    {limit && limit >= 0 ? (
                        <span className={styles.adLabel}>
                            {`${ADVERTISEMENT_LABEL}${formatNumberTwoDigits(limit)}`}
                        </span>
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <div className={styles.fallbackSection}>
                    <p className={styles.fallback}>
                        {FALLBACK_TEXT}
                    </p>
                </div>
            )}
        </>
    );
};

MovieDescription.defaultProps = defaultProps;

export default WithAdvertisement(MovieDescription);
