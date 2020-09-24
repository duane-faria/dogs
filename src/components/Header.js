import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
// para usar um svg importamos ele como um componente
import { UserContext } from '../UserContext';

export default function Header() {
  const user = React.useContext(UserContext);
  console.log(user);
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to='/' arial-label='Dogs - home' className={styles.logo}>
          <Dogs />
        </Link>
        <Link to='/login' className={styles.login}>
          Login / criar login
        </Link>
      </nav>
    </div>
  );
}
