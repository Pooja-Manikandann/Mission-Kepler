import React, { useEffect, useState } from 'react';
import { getShortTeasers } from '../../services/TeaserServices';
import { teaserProps } from '../../modals/modal';
import styles from './ShortTeasers.module.scss';
import { ADVERTISEMENT_LIMIT, APP_CONSTANTS } from '../../constants';
import TeaserCard from '../../components/TeaserCard/TeaserCard';
import { getRandomShortAdvertisement } from 'src/utils/getRandomAdvertisement.utils';
import useLoader from 'src/hooks/useLoader';
import CustomLoader from 'src/components/CustomLoader/CustomLoader';

/**
 * @description - function returns components of teasers
 * @returns - list of short teasers
 */
const ShortTeasers = () => {
    const { TITLE } = APP_CONSTANTS.SHORT_TEASERS;
    const { SMALL_AD } = ADVERTISEMENT_LIMIT;
    const [shortTeasers, setShortTeasers] = useState<teaserProps[]>([]);
    const { loading, showLoader, hideLoader } = useLoader();

    useEffect(() => {
        showLoader();
        const fetchShortTeasers = async () => {
            const response = await getShortTeasers();
            setShortTeasers(response);
            hideLoader();
        };
        fetchShortTeasers();
    }, []);

    return (
        <>
            {loading ? (
                <CustomLoader />
            ) : (
                <div className={styles.teasersSections}>
                    <h3>{TITLE}</h3>
                    <div className={styles.shortTeasersWrapper}>
                        {shortTeasers.map((teaser: teaserProps, id: number) => (
                            <div key={id}>
                                <TeaserCard
                                    key={id}
                                    {...teaser}
                                    adStartTiming={SMALL_AD.START}
                                    adDuration={SMALL_AD.DURATION}
                                    adUrl={getRandomShortAdvertisement()}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ShortTeasers;
