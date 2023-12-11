import styles from './Home.module.scss';
import sindel from '../../assets/sindel-background.png';
import Lottery from '../../components/Lottery/Lottery';
import Trailer from '../../containers/trailer/Trailer';
import ShortTeasers from '../../containers/shortTeasers/ShortTeasers';
import OtherLangauges from '../../containers/otherLanguages/OtherLangauges';
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

/**
 * @description renders components for home page
 * @returns renderes homepage 
 */
const Home = () => {
    return (
        <>
            <div className={styles.homeWrapper}>
                <div className={styles.coverPicture}>
                    <img src={sindel} alt='cover' />
                </div>
                <Lottery />
                <div className={styles.section}>
                    <Trailer />
                    <ShortTeasers />
                    <OtherLangauges />
                </div>
            </div>
        </>
    );
};

export default Home;
