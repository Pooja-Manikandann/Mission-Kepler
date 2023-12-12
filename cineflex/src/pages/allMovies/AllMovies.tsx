import React, { useEffect, useMemo, useState } from 'react';
import Button from '../../components/Button/Button';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import styles from './AllMovies.module.scss';
import MovieDescription from '../../containers/movieDescription/MovieDescription';
import {
    ADVERTISEMENT_LIMIT,
    FORM_CONSTANTS,
    MEDIUM_VARIANT,
} from '../../constants';
import { APP_CONSTANTS } from '../../constants';
import { getMovies } from '../../services/MovieService';
import { movieDetails } from '../../modals/modal';

/**
 * @description component that renders all movies page
 * @returns renders all movies page 
 */
function AllMovies() {
    const { COLOR } = FORM_CONSTANTS;
    const { TITLE, LOAD_MORE } = APP_CONSTANTS.ALL_MOVIES;
    const { LARGE_AD } = ADVERTISEMENT_LIMIT;

    const [selectedMovie, setSelectedMovie] = useState({
        id: '0',
        movie: '',
        likes: '0',
        description: '',
        actors: [''],
        link: '',
        isLiked: false,
    });
    const [movies, setMovies] = useState<movieDetails[] | any>([]);
    const [pageNo, setPageNo] = useState(1);
    const [resetAdvertisement, setResetAdvertisement] = useState<boolean>(false);

    useEffect(() => {
        const fetchAllMovies = async () => {
            console.log('inside')
            const data = await getMovies(pageNo);
            setMovies(data);
        };
        fetchAllMovies();
        console.log('useffect', pageNo)
    }, [pageNo]);

    /**
     * @description update page number to show movie cards
     */
    const updatePageNo = () => {
        setPageNo(pageNo + 1);
    };

    /**
     * @description function to update like count for movie
     * @param movieId id of the movie that needs to be updated
     * @param likes likes count to be updated
     * @returns returns the updated movie data
     */
    const updateLike = (movieId: string, likes: string) => {
        const index = movies.findIndex(
            (movie: movieDetails) => movie.id === movieId,
        );
        const likeStatus = movies[index].isLiked;
        const likesCount = Number(movies[index].likes);
        const movieUpdate = {
            ...movies[index],
            likes: likeStatus ? likesCount - 1 : likesCount + 1,
            isLiked: !likeStatus,
        };
        const data = [
            ...movies.slice(0, index),
            movieUpdate,
            ...movies.slice(index + 1),
        ];
        setMovies(data);
        if (selectedMovie.id === movieUpdate.id) setSelectedMovie(movieUpdate);
        return data;
    };

    /**
     * @description function to reset advertisement
     */
    const selectMovie = () => {
        setResetAdvertisement(true);
    };

    return (
        <div className={styles.allMoviesContainer}>
            <div className={styles.allMoviesWrapper}>
                <h2 className={styles.allMoviesTitle}>{TITLE}</h2>
                <div className={styles.allMoviesContextWrapper}>
                    <div className={styles.moviesLeftContainer}>
                        <div className={styles.moviesWrapper}>
                            {movies.map((movie: movieDetails, index: number) => (
                                <MoviePoster
                                    key={index}
                                    movieDetails={movie}
                                    updateSelectedMovie={setSelectedMovie}
                                    updateLike={updateLike}
                                    selectMovie={selectMovie}
                                />
                            ))}
                        </div>

                        <Button
                            label={LOAD_MORE}
                            size={MEDIUM_VARIANT}
                            color={COLOR.YELLOW}
                            disabled={false}
                            onClick={updatePageNo}
                        />
                    </div>
                    <div className={styles.descriptionRightContainer}>
                        <MovieDescription
                            advertisement={LARGE_AD}
                            movieDetails={selectedMovie}
                            updateLike={updateLike}
                            resetAdvertisement={resetAdvertisement}
                            setResetAdvertisement={setResetAdvertisement}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllMovies;
