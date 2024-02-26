import React, { useEffect, useReducer, useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Buttton';
import styles from './BlogsContainer.module.scss';
import { getBlogs } from 'src/services/blogsServices';
import Blog from 'src/components/Blog/Blog';
import { blogType } from 'src/modals/modals';
import {compact} from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction } from 'src/store/modalSlice';
import NewBlogForm from 'src/components/NewBlogForm/NewBlogForm';
import { localStorageHelper } from 'src/utils/localStorage.util';
import { loaderAction } from 'src/store/loaderSlice';
import { filterData } from 'src/components/Filters/Filters';

type blogsContainerPropType = {
    updateSelectedBlog: Function,
    filters: Array<string>,
    blogs: Array<blogType> | any,
    setBlogs: any,
    setFiltersData: any,
    setFilters: any,
    selectedBlogIndex: number,
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "TITLE":
          return {...state, title: action.value}
        case "CONTENT":
            return {...state, content: action.value}
        default:
          return state;
      }
}

const initialData = {
    title: '',
    content: ''
}

const BlogsContainer = (props:blogsContainerPropType) => {
    const {updateSelectedBlog, filters, blogs, setBlogs, setFiltersData, setFilters, selectedBlogIndex} = props;
    
    const [updatedBlogs, setUpdatedBlogs] = useState<Array<blogType>| any>([]);
    const [searchKey, setSearchKey] = useState<string>('');
    const [newBlogDetails, dispatchBlog] = useReducer(reducer, initialData);
    const [click, setClick] = useState(false);

    const dispatch = useDispatch();
    const isDarkTheme = useSelector((state:any) => state.theme.isDarkTheme);

    const handleClick = () => {
        dispatch(modalAction.updateModalProprties({header, content, footer, showConfirmation: true}))
    }

    const addNewBlog = (blog: any) => {
        const data = {
            title: blog.title,
            details: blog.content,
            photo: 'https://source.unsplash.com/random/200x200?sig=1',
            type: 'local'
        }
        setBlogs([data, ...blogs]);
        setUpdatedBlogs([data, ...blogs]);
        dispatch(modalAction.resetModalProprties());
        if(blogs.findIndex((blog: blogType) => blog.type === 'local') < 0) {
            const localData = {
                id: 'local',
                name: 'local',
                value: true,
                label: 'Local Blogs',
            }
            setFiltersData((filterData: any) => [...filterData, localData])
            setFilters([...filters, 'local'])
            
        }
        setClick(false)
    }

    const updateBlog = (blog: blogType) => {
        updateSelectedBlog(blog, updatedBlogs)
    }

    const filterBlogs = () => {

        const updatedBlog = blogs.map((blog: blogType)=>{
            if((searchKey.length && blog.title.toLowerCase().includes(searchKey.toLowerCase()) || (!searchKey.length)) && filters.includes(blog.type.toLowerCase())){
                return blog;
            }
        });
        setUpdatedBlogs([...compact(updatedBlog)]);
        updateSelectedBlog(compact(updatedBlog)[0], compact(updatedBlog));
    }

    const handleSearch = () => {
        filterBlogs();
    }

    const header = (<h2>Add New Blog</h2>)
    const content = (<NewBlogForm updateBlogDetails={dispatchBlog}  />)
    const footer = (<Button label='ADD' type='primary' onClick={()=> setClick(true)} />)

    

    useEffect(() => {
        blogs.length && filterBlogs();
    },[filters]);

    useEffect(()=>{
        click && addNewBlog(newBlogDetails)
    }, [click])

    useEffect(() => {
        // save in local storage
        if(blogs.length) {
            localStorageHelper.set('blogs', blogs);
            setUpdatedBlogs(blogs)
        } 
    },[blogs])

    return (
        <div className={`${styles.blogsContainer} ${isDarkTheme? styles.darkTheme: ''}`}>
            <div className={styles.blogsActionsWrapper}>
                <div className={styles.searchWrapper}>
                    <Input type='text' placeholder='Search Blogs' darkTheme={isDarkTheme} value={searchKey} onChange={setSearchKey}  handleEnter={handleSearch}  />
                </div>
                <Button label='NEW' type='primary' onClick={handleClick} />
            </div>
            <div className={styles.blogsSection}>
                {updatedBlogs.map((blog: blogType, index: number) => (
                    <Blog key={index} title={blog.title} darkTheme={isDarkTheme} active={selectedBlogIndex === index} details={blog.details} type={blog.type} handleBlogClick={() => updateBlog(blog)}/>
                ))}
            </div>
        </div>
    );
};

BlogsContainer.defaultProps = {
    updateSelectedBlog: () => { },
    filters: ['local'],
    blogs: [{title: 'hello', details:'heelo details', photo: '', type:'local'}],
    setBlogs: () => { },
    setFiltersData: () => { },
    setFilters: () => { },
    selectedBlogIndex: 0,
}

export default BlogsContainer;