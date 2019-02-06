import React from 'react';
import styles from './SquaresGrid.module.scss';
import Square from '../Square/Square';
import { Query } from "react-apollo";
import { GET_ALL_POSTS } from '../../utils/queries';
import { generateSquares } from '../../utils/squaresBuilder';
import LoadingDot from '../LoadingDot/LoadingDot';

export interface SquarePost {
  id: string;
  image?: string;
  text?: string;
}

const SquaresGrid = () => (
  <Query query={GET_ALL_POSTS} >
    {({ loading, error, data }) => {
      if (loading) return <LoadingDot />;
      if (error) return <p>Error loading posts</p>;

      const { posts }: { posts: SquarePost[] } = data;
      const squares = generateSquares(posts);
      return (
        <div className={styles.squares_grid}>
          {squares.map(({ id, image, text }) =>
            <Square
              id={id}
              key={id}
              image={image}
              text={text}
            />
          )}
        </div>
      )
    }}
  </Query>
);

export default SquaresGrid;
