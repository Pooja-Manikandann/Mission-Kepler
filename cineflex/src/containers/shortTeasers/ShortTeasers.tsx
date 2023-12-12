import React, { useEffect, useState } from 'react';
import { getShortTeasers } from '../../services/TeaserServices';
import { teaserProps } from '../../modals/modal';
import styles from './ShortTeasers.module.scss';
import { ADVERTISEMENT_LIMIT, APP_CONSTANTS } from '../../constants';
import Teaser from '../../components/TeaserCard/TeaserCard';
import TeaserCard from '../../components/TeaserCard/TeaserCard';
import WithAdvertisement from '../../components/WithAdvertisement/WithAdvertisement';
import { useRecoilValue } from 'recoil';
import { timerAtom } from '../../atoms/atom';

/**
 * @description - function returns components of teasers
 * @returns - list of short teasers
 */
const ShortTeasers = () => {
    const { TITLE } = APP_CONSTANTS.SHORT_TEASERS;
    const { SMALL_AD } = ADVERTISEMENT_LIMIT;
    const [shortTeasers, setShortTeasers] = useState([]);

    useEffect(() => {
        const fetchShortTeasers = async () => {
            const response = await getShortTeasers();
            setShortTeasers(response);
        };
        fetchShortTeasers();
    }, []);

    return (
        <div className={styles.teasersSections}>
            <h3>{TITLE}</h3>
            <div className={styles.shortTeasersWrapper}>
                {shortTeasers.map((teaser: teaserProps, id: number) => (
                    <div key={id}>
                        <TeaserCard key={id} {...teaser} advertisement={SMALL_AD} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShortTeasers;
