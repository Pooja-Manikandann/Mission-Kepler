import React from 'react'
import { blogProps } from 'src/modals/modals';
import styles from './Blog.module.scss';

export const defaultProps = {
  title: 'test title',
  details: 'test details',
  type: 'test',
  handleBlogClick: () => { },
  active: false,
  darkTheme: false,
}

const Blog = (props: blogProps) => {
  const { title, details, type, handleBlogClick, active, darkTheme } = props;
  return (
    <div data-testid='blog' className={`${styles.blogContainer} ${darkTheme? styles.darkTheme: ''} ${active? styles.active: ''}`} onClick={handleBlogClick}>
        <h3 className={styles.blogTitle}>{title}</h3>
        <h5 className={styles.blogType}>{type}</h5>
        <p className={styles.blogDetails}>{details}</p>
    </div>
  )
}

Blog.defaultProps = defaultProps;

export default Blog;