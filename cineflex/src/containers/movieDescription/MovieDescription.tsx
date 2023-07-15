import { APP_CONSTANTS } from '../../constants/app.constants';
import styles from './MovieDescription.module.scss';
import { FaThumbsUp } from 'react-icons/fa';

type Props = {
    movieDetails: {
        id: number,
        name: string,
        likes: number,
        description: string,
        actors: Array<string>,
    }
}

const defaultProps = {
    movieDetails: {
        id: 0,
        name: '',
        likes: 0,
        decription: '',
        actors:[''],
    }
}

const MovieDescription = ({movieDetails}: Props) => {
    const { name, likes, description, actors } = movieDetails;
    const { LIKES, ACTORS } = APP_CONSTANTS.ALL_MOVIES

    return (
        <div className={styles.movieDescriptionSection}>
            <div className={styles.movieDescriptionHeader}>
                <h2 className={styles.movieName}>{name}</h2>
                <div className={styles.likeIconWrapper}>
                    <FaThumbsUp />
                </div>

            </div>
            <h5 className={styles.movieLikes}>{likes} {LIKES}</h5>
            <img className={styles.moviePosterImage} src="https://m.media-amazon.com/images/M/MV5BYmY2ZDUxNzUtYWZlYy00MThhLWI5NjktZDhjZTU3MDY5YTM3XkEyXkFqcGdeQXVyNTYxMDgzODI@._V1_.jpg" alt="movie poster" />
            <p className={styles.movieDescription}>{description}</p>
            <div className={styles.actorsWrapper}>
                <h4 className={styles.actorTitle}>{ACTORS}</h4>
                <div className={styles.actorsContent}>
                    {actors.map((actor) => (
                        <p className={styles.actorName}>{actor}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

MovieDescription.defaultProps = defaultProps;

export default MovieDescription;