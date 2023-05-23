import React, { useContext, useEffect, useState } from 'react';
import logo from "../../assets/logo.png"
import styles from "./Header.module.scss"
import LoginContext from '../../context/loginContext';
import Box from '../../components/box/Box';
import useTimer from '../../hooks/useTimer';
import { convertISDToEST, getDefaultTime } from '../../utils/getTime';
import prime from "../../assets/prime.png";

const Header = () => {

    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [estMinutes, setEstMinutes] = useState(0);
    const [estHours, setEstHours] = useState(0);
    const [istDate, setIstDate] = useState("");
    const [estDate, setEstDate] = useState("");
    const [sessionTime, setSessionTime] = useState(0);
    const [session, setSession] = useState("");

    const { user } = useContext(LoginContext);

    useEffect(() => {
        const date = new Date();

        // get default time and update the same in state
        let { initialMinutes, initialHours, formattedDate } = getDefaultTime(date);
        updateTimings('IST', initialMinutes, initialHours, formattedDate);

        // convert current IST date to EST date format
        const estDate = convertISDToEST(date);

        // get default time and update the same in state
        let est = getDefaultTime(estDate);
        updateTimings('EST', est.initialMinutes, est.initialHours, est.formattedDate);

    }, [])
    useTimer(minutes, hours, estMinutes, estHours, setHours, setMinutes, setEstHours, setEstMinutes, setSessionTime);

    const updateTimings = (dateFormat, initialMinutes, initialHours, formattedDate) => {

        switch (dateFormat) {
            case 'IST':
                setMinutes(initialMinutes);
                setHours(initialHours);
                setIstDate(formattedDate);
                break;

            case 'EST':
                setEstMinutes(initialMinutes);
                setEstHours(initialHours);
                setEstDate(formattedDate);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const sessionHours = Math.trunc(sessionTime / 60);
        const sessionMinutes = sessionTime % 60;
        let session = sessionHours && sessionMinutes ? `${sessionHours}HR ${sessionMinutes}MIN` : sessionHours ? `${sessionHours}HR` : sessionMinutes ? `${sessionMinutes}MIN` : `0MIN`
        setSession(session);
    }, [sessionTime])
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
                    <Box subtitle={`${estDate} - EST`} content={`${estHours} : ${estMinutes}`} />
                    <Box subtitle={`${istDate} - IST`} content={`${hours} : ${minutes}`} />
                </div>
                <span className={styles.profileName}>Hi, {user.name}</span>
            </div>
        </header>
    )
}
export default Header;