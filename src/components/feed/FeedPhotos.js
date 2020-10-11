import React from 'react';
import FeedPhotoItem from './FeedPhotoItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../helper/Error';
import Loading from '../helper/Loading';
import styles from './FeedPhoto.module.css';

export default function FeedPhoto({ user, setModalPhoto, page }) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      console.log(user);
      const { url, options } = PHOTOS_GET({ page: 2, total: 6, user });
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request, user]);

  if (error) {
    return <Error error={error} />;
  }
  if (loading) {
    return <Loading />;
  }
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
}
