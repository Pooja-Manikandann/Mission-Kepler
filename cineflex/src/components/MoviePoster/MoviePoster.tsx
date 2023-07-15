import { FaThumbsUp } from 'react-icons/fa';
import styles from './MoviePoster.module.scss';
import { APP_CONSTANTS } from '../../constants/app.constants';

type Props = {
    movieDetails: {
        id: number,
        name: string,
        likes: number,
        description: string,
        actors: Array<string>,
    },
    updateSelectedMovie: Function,
}

const defaultProps = {
    movieDetails: {
        id: 0,
        name: '',
        likes: 0,
        decription: '',
        actors:[''],
    },
    updateSelectedMovie: () => {}
}


const MoviePoster = ({movieDetails, updateSelectedMovie}: Props) => {
    const { name, likes } = movieDetails;
    const { LIKES } = APP_CONSTANTS.ALL_MOVIES

    const updateMovieSelection = () => {
        updateSelectedMovie(movieDetails);
    }
    return (
        <div className={styles.moviePoster}>
            <img className={styles.moviePosterImage} src="https://m.media-amazon.com/images/M/MV5BYmY2ZDUxNzUtYWZlYy00MThhLWI5NjktZDhjZTU3MDY5YTM3XkEyXkFqcGdeQXVyNTYxMDgzODI@._V1_.jpg" alt="movie poster" onClick={updateMovieSelection} />
            <div className={styles.descriptionWrapper}>
                <div className={styles.description}>
                    <h4 className={styles.movieName}>{name}</h4>
                    <h5 className={styles.likes}>{likes} {LIKES}</h5>
                </div>
                <div className={styles.iconWrapper}>
                    <FaThumbsUp />
                </div>
            </div>
        </div>
    )
}

MoviePoster.defaultProps = defaultProps;

export default MoviePoster;