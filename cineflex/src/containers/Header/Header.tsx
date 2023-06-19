import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Header.module.scss';
import { APP_PATH } from '../../constants';
import { useAuth } from '../../hooks/useAuth';

/**
 * @function - navbar with navlink to naviagte to different routes throughout app
 * @returns - header component with navbar
 */
const Header = () => {
  const { HOME_PATH, LOGIN_PATH, ALL_MOVIES, SHOW_TIME_PATH } = APP_PATH;
  const location = useLocation();

  const { useAuthContext, clearAuth } = useAuth();
  const { isUserLoggedIn } = useAuthContext();
  const navigate = useNavigate();


  const pathName = location.pathname;

  /**
   * @description function to clear auth context and local storage logout user
   */
  const handleLogout = () => {
    clearAuth();
    navigate(APP_PATH.HOME_PATH.PATH);
  }

  return (
    <header className={styles.cineflexNavbar}>
        <NavLink to={HOME_PATH.PATH}>
            <img src={logo} alt='logo' />
        </NavLink>

        {pathName !== LOGIN_PATH.PATH &&
        <>
          <div className={styles.group}>
            <NavLink to={HOME_PATH.PATH}>{HOME_PATH.LABEL}</NavLink>
            <NavLink to={ALL_MOVIES.PATH}>{ALL_MOVIES.LABEL}</NavLink>
            {isUserLoggedIn &&
              <NavLink to={SHOW_TIME_PATH.PATH}>{SHOW_TIME_PATH.LABEL}</NavLink>}
          </div>
          {isUserLoggedIn ?
            <div className={styles.loginGroup}>
              <span>Hi Nijin</span>
              <span onClick={handleLogout}>Logout</span>
            </div>:
            <NavLink to={LOGIN_PATH.PATH}>{LOGIN_PATH.LABEL}</NavLink>
            
          }
        </> }
        
    </header>
  )
}

export default Header;