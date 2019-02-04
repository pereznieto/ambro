import React from 'react';
import styles from './SquaresGrid.module.css';
import Square from '../Square/Square';
import { Query } from "react-apollo";
import gql from "graphql-tag";;

const SquaresGrid = () => (
  <Query
    query={gql`
      {
        posts {
          id
          image
          text
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading post...</p>;
      if (error) return <p>Error loading post</p>;

      const { posts } = data;
      return (
        <div className={styles.squares_grid}>
          {posts.map((post: any) =>
            <Square
              id={`post/${post.id}`}
              key={post.id}
              image={post.image}
              text={post.text}
            />
          )}
        </div>
      )
    }}
  </Query>
);

export default SquaresGrid;
