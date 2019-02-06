import React from 'react';
import styles from './Square.module.css';
import { Link } from 'react-router-dom';

interface SquareProps {
  id: string;
  image?: string;
  text?: string;
}

const Square = ({ id, image, text }: SquareProps) => (
  <Link
    to={image ? `/post/${id}` : `/${id}`}
    className={styles.square}
    {...image && { style: { backgroundImage: `url(${image})` } }}
  >
    {text}
  </Link>
);

export default Square;
