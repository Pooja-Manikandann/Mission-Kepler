import React, { useState } from 'react'
import Input from '../Input/Input'
import { NewBlogFormProps } from 'src/modals/modals';
import styles from './NewBlogForm.module.scss';
import { useSelector } from 'react-redux';

export const defaultProps = {
  updateBlogDetails: () => { }
}

const NewBlogForm = (props: NewBlogFormProps) => {
    const { updateBlogDetails } = props;
    const isDarkTheme = useSelector((state:any) => state.theme.isDarkTheme);

    const [blogDetails, setBlogDetails] = useState({
      title: '',
      content: ''
  });

    const handleChange = (type:string, data: string) => {
      updateBlogDetails({type: type, value: data})
    }
    const updateTitle = (data: string) => {
      setBlogDetails({...blogDetails, title: data})
    }
    const updateContent = (data: string) => {
      setBlogDetails({...blogDetails, content: data})
    }

  return (
    <div className={`${isDarkTheme? styles.darkTheme: ''}`}>
        <Input type='text' variant='transparent' value={blogDetails.title} onChange={(data: string) => {updateTitle(data);handleChange('TITLE', data)}} placeholder='Name your blog' maxlength={40} />
        <textarea data-testid='textarea' className={styles.textarea} onChange={(e: any) => {updateContent(e.target.value);handleChange('CONTENT', e.target.value)}} placeholder='Write Content Here...' ></textarea>
    </div>
  )
}

NewBlogForm.defaultProps = defaultProps;

export default NewBlogForm;