import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForms from './PhotoCommentsForms';
import styles from './PhotoComments.module.css';

export default function PhotoComments(props) {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);
  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.author}</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForms  id={props.id} setComments={setComments} />}
    </>
  );
}
