import Button from "../../components/Button/Button"
import sintel from '../../assets/sindel-background.png';
import { APP_CONSTANTS } from "../../constants/app.constants";
import { FORM_CONSTANTS, EXTRA_SMALL_VARIANT } from "../../constants";
import styles from './Trailer.module.scss'

/**
 * @description - function consists of static trailer content from here user will be able to watch the movie
 * @returns static trailer content 
 */
const Trailer = () => {
  const { TITLE, SINTEL_TITLE, SINTEL_DESCRIPTION, WATCH_NOW } = APP_CONSTANTS.TRAILER;
  const { COLOR } = FORM_CONSTANTS;
  return (
    <div className={styles.trailerSection}>
        <h2 className={styles.tarilerTitle}>{TITLE}</h2>
        <p className={styles.trailerAction}>You need to sign in to view Trailers <span>Sign in Now</span></p>
        <div className={styles.trailerContainer}>
            <img className={styles.trailerImage} src={sintel} alt="trailer logo" />
            <div className={styles.trailerContentWrapper}>
                <h3>{SINTEL_TITLE}</h3>

                <p>{SINTEL_DESCRIPTION}</p>
                
                <Button label={WATCH_NOW} size={EXTRA_SMALL_VARIANT} color={COLOR.YELLOW} disabled={false} />
            </div>
        </div>
    </div>
  )
}

export default Trailer;