import { FORM_CONSTANTS } from '../../constants';
import LoginForm from '../../containers/forms/LoginForm/LoginForm';
import styles from './Login.module.scss';

const Login = () => {
  const { TITLE, CAPTION } = FORM_CONSTANTS.LOGIN_FORM;

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <h2 className={styles.title}>{TITLE}</h2>
        <p className={styles.caption}>{CAPTION}</p>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login;