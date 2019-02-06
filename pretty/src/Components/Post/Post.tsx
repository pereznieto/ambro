import React from 'react';
import styles from './Post.module.css';
import { RouteComponentProps } from 'react-router';
import { Query } from "react-apollo";
import { GET_POST } from '../../utils/queries';
import moment from 'moment';

interface PostProps extends RouteComponentProps<{ id: string }> { };

const Post = ({ match: { params: { id } } }: PostProps) => (
  <Query query={GET_POST} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading post...</p>;
      if (error) return <p>Error loading post</p>;

      const { image, ratio, location, caption, date, text } = data.post;
      return (
        <div className={styles.post}>
          <h2 className={styles.caption}>{caption}</h2>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${image})`,
              paddingTop: `${ratio}%`,
            }}
          />
          <p className={styles.location}>
            <span>{location}</span>
            <span className={styles.date}>{moment(date).format('D MMMM YYYY')}</span>
          </p>
          {text && <p>{text}</p>}
        </div >
      )
    }}
  </Query>
);

export default Post;
