import React from 'react'
import { blogProps } from 'src/modals/modals';
import styles from './Blog.module.scss';

const Blog = (props: blogProps) => {
    const { title, details, type } = props;
  return (
    <div className={styles.blogContainer}>
        <h3 className={styles.blogTitle}>{title}</h3>
        <h5 className={styles.blogType}>{type}</h5>
        <p className={styles.blogDetails}>{details}</p>
    </div>
  )
}

export default Blog;