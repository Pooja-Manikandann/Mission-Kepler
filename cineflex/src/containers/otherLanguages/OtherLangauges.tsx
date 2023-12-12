import React from 'react';
import styles from './OtherLanguages.module.scss';
import { range } from 'lodash';
import { APP_CONSTANTS } from '../../constants';

/**
 * @description - static content shows different langues icon to switch
 * @returns - static other languagues icons
 */
const OtherLangauges = () => {
    const { TITLE, IMAGE_URL, LANGUAGE_ALT } = APP_CONSTANTS.OTHER_LANGUAGES;

    const displayLanguageIcons = () => {
        return range(1, 6).map((i) => {
            const imageUrl = `${IMAGE_URL}${i}.png`;
            return (
                <div key={i} className={styles.languageIconWrapper}>
                    <img
                        src={imageUrl}
                        className={styles.languageIcon}
                        alt={LANGUAGE_ALT}
                    />
                </div>
            );
        });
    };

    return (
        <div className={styles.otherLanguagesSections}>
            <h4>{TITLE}</h4>
            <div className={styles.otherLanguagesWrapper}>
                {displayLanguageIcons()}
            </div>
        </div>
    );
};

export default OtherLangauges;
