import React from 'react';
import { Audio } from 'react-loader-spinner';
import styles from './Loader.module.scss';
import { useSelector } from 'react-redux';
import Overlay from '../Overlay/Overlay';

const Loader = () => {
    const showOverlay = useSelector((state: any) => state.loader.showOverLay);
  return (
    <React.Fragment>
        <div className={styles.loaderWrapper}> 
            <Audio height='80' width='80' color='dark-grey' ariaLabel='loading' />
        </div>
        <Overlay variant={showOverlay? 'transparent': ''}  />
    </React.Fragment>
  )
}

export default Loader;