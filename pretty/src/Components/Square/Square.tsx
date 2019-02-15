import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Square.module.scss';

interface SquareProps {
  id: string;
  image?: string;
  text?: string;
}

const Square = ({ id, image, text }: SquareProps) => (
  <Link
    to={image ? `/post/${id}` : `/${id}`}
    className={`${styles.square} ${image ? styles.loading : styles.link}`}
    {...image && { style: { backgroundImage: `url(${image})` } }}
  >
    {text}
  </Link>
);

export default Square;
