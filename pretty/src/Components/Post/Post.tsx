import React from 'react';
import styles from './Post.module.css';
import { RouteComponentProps } from 'react-router';
import { Query } from "react-apollo";
import gql from "graphql-tag";

interface PostProps extends RouteComponentProps<{ id: string }> { }

const Post = ({ match: { params: { id } } }: PostProps) => (
  <Query
    query={gql`
      {
        post(id: "${id}") {
          caption
          image
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading post...</p>;
      if (error) return <p>Error loading post</p>;

      const { image, caption } = data.post;
      return (
        <div className={styles.post}>
          {caption && <p className={styles.caption}>{caption}</p>}
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${image})` }}
          />
        </div >
      )
    }}
  </Query>
);

export default Post;
