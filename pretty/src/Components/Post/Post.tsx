import React from 'react';
import styles from './Post.module.scss';
import { RouteComponentProps } from 'react-router';
import { Query } from "react-apollo";
import { GET_POST } from '../../utils/queries';
import moment from 'moment';
import LoadingDot from '../LoadingDot/LoadingDot';
import Markdown from '../Markdown/Markdown';

interface PostProps extends RouteComponentProps<{ id: string }> { };

const Post = ({ match: { params: { id } } }: PostProps) => (
  <Query query={GET_POST} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <LoadingDot />;
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
            {location && <span>{location}</span>}
            {date && <span className={styles.date}>{moment(date).format('D MMMM YYYY')}</span>}
          </p>
          {text && <Markdown text={text} />}
        </div >
      )
    }}
  </Query>
);

export default Post;
