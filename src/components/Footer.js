import React from 'react';
import styles from './Footer.module.css';
import {ReactComponent as Dogs} from '../Assets/dogs-footer.svg';

export default function Footer() {
  return (
    <footer className={styles.footer }>
      <Dogs/>
      {/* <p>Dogs. Alguns direitos reservados.</p> */}
      <p>Feito com amor por: Duane {'<3'}</p>
    </footer>
  );
}
