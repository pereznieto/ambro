import React from 'react';
import styles from './Post.module.scss';
import moment from 'moment';
import Markdown from '../Markdown/Markdown';

interface PostProps {
  id: string;
  image: string;
  ratio: string;
  location: string;
  caption: string;
  date: string;
  text?: string;
  isSmall?: boolean;
};

const Post = ({ image, ratio, location, caption, date, text, isSmall }: PostProps) => (
  <div className={`${styles.post} ${isSmall ? styles.smallPost : ''}`}>
    <h2 className={styles.caption}>{caption}</h2>
    <div
      className={styles.image}
      style={{
        backgroundImage: `url(${image})`,
        paddingTop: `${ratio}%`,
      }}
    />
    <p className={styles.location}>
      {location && <span>{location}</span>}
      {date && <span className={styles.date}>{moment(date).format('D MMMM YYYY')}</span>}
    </p>
    {text && <Markdown text={text} />}
  </div >
);

export default Post;
