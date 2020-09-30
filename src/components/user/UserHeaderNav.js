import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Quit } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
export default function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext);
  const [mobile, setMobile] = React.useState(null);

  return (
    <nav className={styles.nav}>
      <NavLink to='/conta' end activeClassName={styles.active}>
        <MyPhotos />
        {mobile && 'Minhas fotos'}
      </NavLink>
      <NavLink to='/conta/estatisticas' end activeClassName={styles.active}>
        <Statistics />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to='/conta/postar' end activeClassName={styles.active}>
        <AddPhoto />
        {mobile && 'Adicionar foto'}
      </NavLink>
      <button onClick={userLogout}>
        <Quit />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
}
