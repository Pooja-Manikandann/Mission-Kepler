import { FaThumbsUp } from 'react-icons/fa';
import styles from './MoviePoster.module.scss';
import { APP_CONSTANTS } from '../../constants/app.constants';
import React, { memo } from 'react';
import { movieProps } from '../../modals/modal';

export const defaultProps = {
    movieDetails: {
        id: '0',
        name: '',
        likes: '0',
        decription: '',
        actors: [''],
        isLiked: false,
    },
    updateSelectedMovie: () => {},
    updateLike: () => {},
    selectMovie: () => {},
};

const MoviePoster = ({
    movieDetails,
    updateSelectedMovie,
    updateLike,
    selectMovie,
}: movieProps) => {
    const { movie, likes, link, id, isLiked } = movieDetails;
    const { LIKES, MOVIE_POSTER } = APP_CONSTANTS.ALL_MOVIES;

    /**
     * @description function to update selected movie
     */
    const updateMovieSelection = () => {
        updateSelectedMovie(movieDetails);
        selectMovie();
    };
    return (
        <div className={styles.moviePoster}>
            <img
                className={styles.moviePosterImage}
                src={link}
                alt={MOVIE_POSTER}
                onClick={updateMovieSelection}
            />
            <div className={styles.descriptionWrapper}>
                <div className={styles.description}>
                    <h4 className={styles.movieName}>{movie}</h4>
                    <h5 className={styles.likes}>
                        {likes} {LIKES}
                    </h5>
                </div>
                <div
                    className={`${styles.iconWrapper} ${isLiked && styles.liked}`}
                    onClick={() => updateLike(id, Number(likes) + 1)}
                >
                    <FaThumbsUp />
                </div>
            </div>
        </div>
    );
};

MoviePoster.defaultProps = defaultProps;

export default memo(MoviePoster);
