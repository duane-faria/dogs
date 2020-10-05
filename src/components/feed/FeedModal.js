import React from 'react';
import styles from './FeedModal.module.css';
import PhotoContent from '../photo/PhotoContent';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../helper/Error';
import Loading from '../helper/Loading';

export default function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);
  
  function handleOutsideClick({target, currentTarget}){
   if(target === currentTarget) setModalPhoto(null)
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}
