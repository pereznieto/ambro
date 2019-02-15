import React from 'react';
import styles from './About.module.scss';

const About = () => (
  <div className={styles.about}>
    <div className={styles.picturito} />
    <h2>Gintarytė Vaičiulėnaitė</h2>
    <h3>Made in Lithuania 🤘🏻 Based in London📍</h3>
    <p className={styles.bio}>Passionate about fashion, travel, entrepreneurship, and philosophy.</p>
  </div>
);

export default About;
