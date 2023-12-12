import Button from '../../components/Button/Button';
import sintel from '../../assets/sindel-background.png';
import { APP_CONSTANTS, APP_PATH } from '../../constants';
import { FORM_CONSTANTS, EXTRA_SMALL_VARIANT } from '../../constants';
import styles from './Trailer.module.scss';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

/**
 * @description - function consists of static trailer content from here user will be able to watch the movie
 * @returns static trailer content
 */
const Trailer = () => {
    const { TITLE, SINTEL_TITLE, SINTEL_DESCRIPTION, WATCH_NOW, SIGN_IN_LABEL, SIGN_IN_REQ_LABEL } =
        APP_CONSTANTS.TRAILER;
    const { LOGIN_PATH, SHOW_TIME_PATH } = APP_PATH;
    const { COLOR } = FORM_CONSTANTS;
    const { useAuthContext } = useAuth();
    const { isUserLoggedIn } = useAuthContext();
    const navigate = useNavigate();

    /**
     * @description function to redirect to now watching or login page based of logged in user
     */
    const handleClick = () => {
        const path = isUserLoggedIn ? SHOW_TIME_PATH.PATH : LOGIN_PATH.PATH;
        navigate(path);
    };

    return (
        <div className={styles.trailerSection}>
            <h2 className={styles.tarilerTitle}>{TITLE}</h2>
            <p className={styles.trailerAction}>
                {SIGN_IN_REQ_LABEL}{' '}
                {!isUserLoggedIn && <span className={styles.link}>{SIGN_IN_LABEL}</span>}
            </p>
            <div className={styles.trailerContainer}>
                <img
                    className={styles.trailerImage}
                    src={sintel}
                    alt='trailer logo'
                />
                <div className={styles.trailerContentWrapper}>
                    <h3>{SINTEL_TITLE}</h3>

                    <p>{SINTEL_DESCRIPTION}</p>

                    <Button
                        label={WATCH_NOW}
                        size={EXTRA_SMALL_VARIANT}
                        color={COLOR.YELLOW}
                        disabled={false}
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default Trailer;
