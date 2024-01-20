import React from 'react';
import styles from './BlogDescription.module.scss';
import { blogType } from 'src/modals/modals';
import Button from '../Button/Buttton';

const BlogDescription = (props:blogType) => {
    const {title, details, photo} = props;    
    const handleClick = () => {
        console.log('clicked');
    }
  return (
    <div className={styles.blogDescriptionSection}>
        <div className={styles.blogDescriptionWrapper}>

            <img className={styles.blogImage} src={photo} alt="Blog" />
            <h2 className={styles.blogTitle}>{title}</h2>
            <p className={styles.blogDetails}>{details}</p>
        </div>
        <div className={styles.actions}>
            <Button 
                label='EDIT CONTENT'
                type='secondary'
                onClick={handleClick}
            />
        </div>

    </div>
  )
}

export default BlogDescription