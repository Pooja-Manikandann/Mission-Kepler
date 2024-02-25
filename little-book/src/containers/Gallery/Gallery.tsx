import React, { useEffect, useState } from 'react'
import ProfileCard from 'src/components/ProfileCard/ProfileCard';
import { userType } from 'src/modals/modals';
import { getUsers } from 'src/services/usersServices'
import styles from './Gallery.module.scss';
import { useSelector } from 'react-redux';

const Gallery = () => {
    const [users, setUsers] = useState<Array<userType>>([]);
    const isDarkTheme = useSelector((state:any) => state.theme.isDarkTheme);
    useEffect(()=>{
        const fetchUsers = async() => {
            const data = await getUsers();
            setUsers(data);
        }
        fetchUsers();
    },[])

  return (
    <div className={styles.galleryWrapper}>
        {users.map((user)=> (
            <ProfileCard photo={user.photo? user.photo : user.website} darkTheme={isDarkTheme} username={user.username} name={user.name} />
        ))}
    </div>
  )
}

export default Gallery;