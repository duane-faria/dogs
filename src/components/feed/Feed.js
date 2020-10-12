import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import { UserContext } from '../../UserContext';
import PropTypes from 'prop-types';
import Head from '../helper/Head';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    function infiniteScroll(e) {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        let wait = false;

        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  });

  return (
    <div>
      {user != 0 && <Head title='Uploads' />}
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          setModalPhoto={setModalPhoto}
          page={page}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
export default Feed;
