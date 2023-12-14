import React from 'react';
import { Audio } from 'react-loader-spinner';
import styles from './CustomLoader.module.scss'

const CustomLoader = () => {
  return (
    
    <div className={styles.loaderWrapper}>
        <Audio
            height="80"
            width="80"                
            color="grey"
            ariaLabel="loading"
        />  
    </div>
  )
}

export default CustomLoader;