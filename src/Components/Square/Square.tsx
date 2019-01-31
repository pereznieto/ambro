import React from 'react';
import styles from './Square.module.css';

interface SquareProps {
  image?: string;
  link?: {
    text: string;
    url: string;
  }
}

const Square = ({ image, link }: SquareProps) => (
  <div
    className={styles.square}
    style={{ backgroundImage: image ? `url(${image})` : '' }}
  >
    {link && <a href={link.url} className={styles.square_link}>{link.text}</a>}
  </div>
);

export default Square;
