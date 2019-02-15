import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => (
  <div className={styles.contact}>
    <div className={styles.picturito} />
    <h2>For sponsorship and business opportunities</h2>
    <a href="mailto:gintare@ambro.com" className={styles.email}>
      gintare@ambro.com
    </a>
  </div>
);

export default Contact;
