import React from 'react';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <p className={styles.subtitle}>Fashion blog</p>
    <div className={styles.overlay} />
    <div className={styles.image} />
  </div>
);

export default Header;
