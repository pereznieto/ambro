import React from 'react';
import styles from './LoadingDot.module.scss';

const LoadingDot = () => (
  <div className={styles.dotDaddy}>
    <div className={styles.dot}>
      <div className={styles.littleDot}></div>
    </div>
  </div>
);

export default LoadingDot;
