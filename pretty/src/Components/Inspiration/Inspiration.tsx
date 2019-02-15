import React from 'react';
import styles from './Inspiration.module.scss';

const Inspiration = () => (
  <div className={styles.inspiration}>
    <h2>Brands that inspire my beautiful sense of aesthetics</h2>
    <div className={styles.section}>
      <div className={styles.picturito} data-brand="sezane" />
      <div className={styles.brand}>
        <a href="https://www.sezane.com">
          <h3>Sézane</h3>
        </a>
      </div>
    </div>
    <div className={styles.section}>
      <div className={styles.picturito} data-brand="bash" />
      <div className={styles.brand}>
        <a href="https://ba-sh.com">
          <h3>ba&sh</h3>
        </a>
      </div>
    </div>
    <div className={styles.section}>
      <div className={styles.picturito} data-brand="otherstories" />
      <div className={styles.brand}>
        <a href="https://www.stories.com">
          <h3>& Other Stories</h3>
        </a>
      </div>
    </div>
    <div className={styles.section}>
      <div className={styles.picturito} data-brand="rouje" />
      <div className={styles.brand}>
        <a href="https://www.rouje.com/">
          <h3>Rouje</h3>
        </a>
      </div>
    </div>
    <div className={styles.section}>
      <div className={styles.picturito} data-brand="lena" />
      <div className={styles.brand}>
        <a href="https://www.sezane.com">
          <h3>Lena &copy;</h3>
        </a>
      </div>
    </div>
  </div>
);

export default Inspiration;
