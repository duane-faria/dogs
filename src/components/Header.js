import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='container'>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login / criar login</Link>
    </nav>
  );
}
