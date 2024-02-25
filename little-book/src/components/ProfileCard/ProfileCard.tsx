import React from 'react'
import { profileCardtype } from 'src/modals/modals'
import styles from './ProfileCard.module.scss';
import errorImageProvider from 'src/utils/errorImageProvider.util';

const ProfileCard = (props: profileCardtype) => {
    const { name, username, photo, darkTheme } = props;

    return (
    <div className={`${styles.profileCardWrapper} ${darkTheme? styles.darkTheme: ''}`}>
        <img className={styles.profileImage} src={photo} alt='user' onError={errorImageProvider} />
        <div>
            <h5 className={styles.name}>{name}</h5>
            <h6 className={styles.username}>{username}</h6>
        </div>
    </div>
  )
}

export default ProfileCard