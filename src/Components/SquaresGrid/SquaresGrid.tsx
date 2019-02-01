import React from 'react';
import styles from './SquaresGrid.module.css';
import { getSquares } from '../../utils/squaresBuilder';
import Square from '../Square/Square';
import images from '../../utils/images';

const SquaresGrid = () => (
  <div className={styles.squares_grid}>
    {getSquares(images).map(({ id, image, text }) =>
      <Square
        id={id}
        key={id}
        image={image}
        text={text}
      />
    )}
  </div>
);

export default SquaresGrid;
