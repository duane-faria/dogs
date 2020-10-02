import React from 'react'
import styles from './FeedPhotoItem.module.css';
  
export default function FeedPhotoItem({photo,setModalPhoto}) {
  return (
    <li className={styles.photo} onClick={() => setModalPhoto(photo)}>
        <img src={photo.src} alt={photo.title}/>
        <span>{photo.acessos}</span>
    </li>
  )
}
