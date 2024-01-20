import React, { useEffect, useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Buttton';
import styles from './BlogsContainer.module.scss';
import { getBlogs } from 'src/services/blogsServices';
import Blog from 'src/components/Blog/Blog';
import { blogType } from 'src/modals/modals';

const BlogsContainer = () => {
    const [blogs, setBlogs] = useState([]);
    const handleClick = () => {

    }

    useEffect(() => {
        const fetchBlogs = async () => {
            const data = await getBlogs();
            console.log(data);
            setBlogs(data);
        }
        fetchBlogs();
    }, [])

    return (
        <div className={styles.blogsContainer}>
            <div className={styles.blogsActionsWrapper}>
                <div className={styles.searchWrapper}>
                    <Input type='text' placeholder='Search Blogs' />
                </div>
                <Button label='NEW' type='primary' onClick={handleClick} />
            </div>
            <div className={styles.blogsSection}>
                {blogs.map((blog: blogType) => (
                    <Blog title={blog.title} details={blog.details} type={blog.type}  />
                ))}
            </div>
        </div>
    );
};

export default BlogsContainer;