import React from 'react';
import { Query } from "react-apollo";
import { GET_ALL_POSTS } from '../../utils/queries';
import { generateSquares } from '../../utils/squaresBuilder';
import LoadingDot from '../LoadingDot/LoadingDot';
import Square from '../Square/Square';
import styles from './SquaresGrid.module.scss';
import Error from '../Error/Error';

export interface SquarePost {
  id: string;
  image: string;
  date: string;
}

const SquaresGrid = () => (
  <Query query={GET_ALL_POSTS} >
    {({ loading, error, data }) => {
      if (loading) return <LoadingDot />;
      if (error) return <Error message="Error loading posts" />;

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
