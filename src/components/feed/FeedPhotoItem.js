import React from 'react'
import styles from './FeedPhotoItem.module.css';
import Image from '../helper/Image';

export default function FeedPhotoItem({photo,setModalPhoto}) {
  return (
    <li className={styles.photo} onClick={() => setModalPhoto(photo)}>
        <Image src={photo.src} alt={photo.title}/>
        <span>{photo.acessos}</span>
    </li>
  )
}
