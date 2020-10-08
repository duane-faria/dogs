import React from 'react';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../helper/Error';
import styles from './PhotoCommentsForms.module.css';
// import styles from './PhotoComments.module.css';

function PhotoCommentsForms({ id, setComments }) {
  const [comment, setComment] = React.useState('');

  const { data, error, loading, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    setComment('');
    response.ok && setComments((comments) => [...comments, json]);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id='comment'
        name='comment'
        placeholder='Comente...'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      {error && <Error error={error} />}
    </form>
  );
}

export default PhotoCommentsForms;
