import moment from 'moment';
import React from 'react';
import Markdown from '../Markdown/Markdown';
import styles from './Post.module.scss';

interface PostProps {
  id: string;
  instagramId?: string;
  image: string;
  ratio: string;
  location?: string;
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
