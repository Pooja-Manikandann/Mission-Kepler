import React, { useContext, useEffect } from 'react';
import logo from "../../assets/logo.png"
import styles from "./Header.module.scss"
import LoginContext from '../../context/loginContext';
import Box from '../../components/box/Box';
import useTimer from '../../hooks/useTimer';
import prime from "../../assets/prime.png";
import TimeContext from '../../context/timeContext';

const Header = () => {

    const { user } = useContext(LoginContext);

    const {estTime, istTime, session} = useContext(TimeContext);

    const { increamentOneMinute } = useTimer();
    
    useEffect(() => {
        let intervalId = setInterval(() => {
            increamentOneMinute();
        }, 60000);
        return () => clearInterval(intervalId);
    },[istTime, estTime]);

    console.log("Container - header");

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} alt='logo' className={styles.logo} />
                {user.prime &&
                    <img src={prime} alt='prime user' className={styles.primeLogo} />}
            </div>
            <div className={styles.detailsWrapper}>
                <div className={styles.dateTimeWrapper}>
                    <Box subtitle='SESSION TIME' content={session} />
                    <Box subtitle={`${estTime.date} - EST`} content={`${estTime.hours} : ${estTime.minutes}`} />
                    <Box subtitle={`${istTime.date} - IST`} content={`${istTime.hours} : ${istTime.minutes}`} />
                </div>
                <span className={styles.profileName}>Hi, {user.name}</span>
            </div>
        </header>
    )
}
export default Header;