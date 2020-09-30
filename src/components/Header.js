import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
// para usar um svg importamos ele como um componente
import { UserContext } from '../UserContext';

export default function Header() {
  const user = React.useContext(UserContext);
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to='/' arial-label='Dogs - home' className={styles.logo}>
          <Dogs />
        </Link>
        {!user.login ? (
          <Link to='/login' className={styles.login}>
            Login / criar login
          </Link>
        ) : (
          <div style={{ display: 'flex' }} className={styles.login}>
            <Link to='/conta'>{user.data.username}</Link>
          </div>
        )}
      </nav>
    </div>
  );
}
