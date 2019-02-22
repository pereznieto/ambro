import React from 'react';
import { Query } from "react-apollo";
import { GET_ALL_POSTS } from '../../utils/queries';
import { generateSquares } from '../../utils/squaresBuilder';
import LoadingDot from '../LoadingDot/LoadingDot';
import Square from '../Square/Square';
import styles from './SquaresGrid.module.scss';
import Error from '../Error/Error';
import Article, { ArticleProps } from '../Article/Article';
import { sortArticles } from '../../utils/articleBuilder';

export interface SquarePost {
  id: string;
  image: string;
  date: string;
  text?: string;
}

const SquaresGrid = () => (
  <Query query={GET_ALL_POSTS} >
    {({ loading, error, data }) => {
      if (loading) return <LoadingDot />;
      if (error) return <Error message="Error loading posts" />;

      const { posts }: { posts: SquarePost[] } = data;
      const articlePosts = posts.filter(post => post.text) as ArticleProps[];
      const squarePosts = posts.filter(post => !post.text);
      const squares = generateSquares(squarePosts);
      return (
        <div className={styles.postsContainer}>
          <div className={styles.articles}>
            <h2 className={styles.articlesTitle}>Articles</h2>
            {sortArticles(articlePosts).map(({ id, image, text }) =>
              <Article
                id={id}
                key={id}
                image={image}
                text={text}
              />
            )}
          </div>
          <div className={styles.squaresGrid}>
            <h2 className={styles.galleryTitle}>Gallery</h2>
            {squares.map(({ id, image, text }) =>
              <Square
                id={id}
                key={id}
                image={image}
                text={text}
              />
            )}
          </div>
        </div>
      )
    }}
  </Query>
);

export default SquaresGrid;
