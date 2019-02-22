import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Article.module.scss';
import { getTitle, getText } from '../../utils/articleBuilder';

export interface ArticleProps {
  id: string;
  date?: string;
  image: string;
  text: string;
}

const Article = ({ id, image, text }: ArticleProps) => (
  <Link to={`/post/${id}`} className={styles.article}>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.textWrapper}>
        {getTitle(text) && <h3 className={styles.caption}>{getTitle(text)}</h3>}
        <div className={styles.text}>{getText(text)}</div>
      </div>
    </div>
  </Link>
);

export default Article;
