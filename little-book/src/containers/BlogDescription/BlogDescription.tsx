import React, { useEffect, useState } from 'react';
import styles from './BlogDescription.module.scss';
import { blogType } from 'src/modals/modals';
import Button from 'src/components/Button/Buttton';
import errorImageProvider from 'src/utils/errorImageProvider.util';
import Input from 'src/components/Input/Input';
import { useSelector } from 'react-redux';

const BlogDescription = (props:blogType) => {
    const {title, details, photo, type, updateBlog, isEditView, setIsEditView} = props;
    const [blogDuplicate, setBlogDuplicate] = useState<blogType>({title, details, photo, type})
    const isDarkTheme = useSelector((state:any) => state.theme.isDarkTheme);
    
    const handleClick = () => {
        setIsEditView(true)
    }
    const updateValue = (key:string, value: string) => {
        let updatedBlog: blogType | any = {...blogDuplicate};
        updatedBlog[key] = value;
        setBlogDuplicate(updatedBlog)
    }
    const saveChanges = () => {
        updateBlog(blogDuplicate);
        setIsEditView(false);
    }
    const discardChanges = () => {
        setBlogDuplicate({title, details, photo, type})
        setIsEditView(false);
    }
    useEffect(() => {
        setBlogDuplicate({title, details, photo, type})        
    },[photo])

  return (
    blogDuplicate.title ?
    <div className={`${styles.blogDescriptionSection} ${isDarkTheme? styles.darkTheme: ''}`}>
        <div className={styles.blogDescriptionWrapper}>

            <img className={styles.blogImage} src={blogDuplicate.photo} alt="Blog" onError={errorImageProvider} />
            {!isEditView? <>
                <h2 className={styles.blogTitle}>{blogDuplicate.title}</h2>
                <p className={styles.blogDetails}>{blogDuplicate.details}</p>
            </>: <>
                <Input type='text' variant='transparent' value={blogDuplicate.title} onChange={(value: string) => updateValue('title', value)}/>
                <textarea data-testid="textarea" value={blogDuplicate.details} onChange={(e: any) => {updateValue('details', e.target.value)}}></textarea>
            </>}
        </div>
        <div className={styles.actions}>
            {
                !isEditView?
            <Button 
                label='EDIT CONTENT'
                type='secondary'
                onClick={handleClick}
            />:<>
                <Button 
                    label='SAVE CHANGES'
                    type='primary'
                    onClick={saveChanges}
                />
                <Button 
                    label='DISCARD'
                    type='secondary'
                    onClick={discardChanges}
                />
            </>
            }

        </div>

    </div> : <></>
  )
}

BlogDescription.defaultProps = {
    title:'test',
    details: 'test details',
    photo: '',
    type: 'national',
    updateBlog: () => { },
    isEditView: false,
    setIsEditView: () => { },
}

export default BlogDescription