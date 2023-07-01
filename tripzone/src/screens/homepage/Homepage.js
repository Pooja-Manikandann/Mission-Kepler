import React, { useCallback, useContext, useEffect } from 'react'
import Header from '../../containers/header/Header';
import styles from "./Homepage.module.scss"
import LeftContainer from '../../containers/left-container/LeftContainer';
import RightContainer from '../../containers/right-container/RightContainer';
import LoginContext from '../../context/loginContext';
import loginInUser from '../../services/loginInUser';

const Homepage = () => {

    const { setUser } = useContext(LoginContext);

    const loginUser = async(userName, password) => {
        console.log("login user")
        let userResponse = await loginInUser(userName, password);
        setUser(userResponse);
    }

    console.log("Page - Homepage");

    useEffect(() => {
        loginUser("pam", "pam123");
        // loginUser("jim", "jim123");
    }, [])

    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <LeftContainer />
                <RightContainer />
            </div>
        </div>
    )
}

export default Homepage;