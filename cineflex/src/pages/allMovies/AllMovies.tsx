import React, { useState } from 'react'
import Button from '../../components/Button/Button';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import styles from './AllMovies.module.scss';
import MovieDescription from '../../containers/movieDescription/MovieDescription';
import { FORM_CONSTANTS, MEDIUM_VARIANT } from '../../constants';
import { APP_CONSTANTS } from '../../constants/app.constants';

function AllMovies() {
  const moviesList = [
    {
      id: 1,
      name: 'Drishyam',
      likes: 223,
      description: `Drishyam (transl. Visual) is a 2013 Indian Malayalam-language crime drama thriller film written and directed by Jeethu Joseph. It stars Mohanlal and Meena in the lead roles and features Ansiba Hassan, Esther Anil, Kalabhavan Shajon, Asha Sarath, Siddique, Roshan Basheer and Neeraj Madhav in supporting roles. The film was produced by Antony Perumbavoor for Aashirvad Cinemas. It follows the struggle of Georgekutty and his family, who come under suspicion when Varun Prabhakar, the son of the Inspector-general of police, goes missing after an attempt to physically harass Georgekutty's daughter.`,
      actors: ['Mohanlal', 'Meena', 'Ansiba Hassan', 'Esther Anil', 'Siddique', 'Asha Sarath'],
    },
    {
      id: 2,
      name: 'Drishyam',
      likes: 223,
      description: `Drishyam (transl. Visual) is a 2013 Indian Malayalam-language crime drama thriller film written and directed by Jeethu Joseph. It stars Mohanlal and Meena in the lead roles and features Ansiba Hassan, Esther Anil, Kalabhavan Shajon, Asha Sarath, Siddique, Roshan Basheer and Neeraj Madhav in supporting roles. The film was produced by Antony Perumbavoor for Aashirvad Cinemas. It follows the struggle of Georgekutty and his family, who come under suspicion when Varun Prabhakar, the son of the Inspector-general of police, goes missing after an attempt to physically harass Georgekutty's daughter.`,
      actors: ['Mohanlal', 'Meena', 'Ansiba Hassan', 'Esther Anil', 'Siddique', 'Asha Sarath'],
    },
    {
      id: 3,
      name: 'Drishyam',
      likes: 223,
      description: `Drishyam (transl. Visual) is a 2013 Indian Malayalam-language crime drama thriller film written and directed by Jeethu Joseph. It stars Mohanlal and Meena in the lead roles and features Ansiba Hassan, Esther Anil, Kalabhavan Shajon, Asha Sarath, Siddique, Roshan Basheer and Neeraj Madhav in supporting roles. The film was produced by Antony Perumbavoor for Aashirvad Cinemas. It follows the struggle of Georgekutty and his family, who come under suspicion when Varun Prabhakar, the son of the Inspector-general of police, goes missing after an attempt to physically harass Georgekutty's daughter.`,
      actors: ['Mohanlal', 'Meena', 'Ansiba Hassan', 'Esther Anil', 'Siddique', 'Asha Sarath'],
    },
    {
      id: 4,
      name: 'Drishyam',
      likes: 223,
      description: `Drishyam (transl. Visual) is a 2013 Indian Malayalam-language crime drama thriller film written and directed by Jeethu Joseph. It stars Mohanlal and Meena in the lead roles and features Ansiba Hassan, Esther Anil, Kalabhavan Shajon, Asha Sarath, Siddique, Roshan Basheer and Neeraj Madhav in supporting roles. The film was produced by Antony Perumbavoor for Aashirvad Cinemas. It follows the struggle of Georgekutty and his family, who come under suspicion when Varun Prabhakar, the son of the Inspector-general of police, goes missing after an attempt to physically harass Georgekutty's daughter.`,
      actors: ['Mohanlal', 'Meena', 'Ansiba Hassan', 'Esther Anil', 'Siddique', 'Asha Sarath'],
    },
  ]

  const [selectedMovie, setSelectedMovie] = useState({id: 0,
    name: '',
    likes: 0,
    description: '',
    actors:['']});

  const { COLOR } = FORM_CONSTANTS;
  const { TITLE, LOAD_MORE } = APP_CONSTANTS.ALL_MOVIES;

  return (
    <div className={styles.allMoviesContainer}>
      <div className={styles.allMoviesWrapper}>
        <h2 className={styles.allMoviesTitle}>{TITLE}</h2>
        <div className={styles.allMoviesContextWrapper}>
          <div className={styles.moviesLeftContainer}>
            <div className={styles.moviesWrapper}>
              {moviesList.map((movie) => (
                <MoviePoster movieDetails={movie} updateSelectedMovie={setSelectedMovie} />
              ))}
            </div>

            <Button label={LOAD_MORE} size={MEDIUM_VARIANT} color={COLOR.YELLOW} disabled={false} />
          </div>
          <div className={styles.descriptionRightContainer}>
            <MovieDescription movieDetails={selectedMovie}/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AllMovies