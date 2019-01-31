import React from 'react';
import styles from './SquaresGrid.module.css';
import Square from '../Square/Square';
import squares from './squares';

const SquaresGrid = () => (
  <div className={styles.squares_grid}>
    {squares.map(square =>
      <Square
        image={square.image}
        link={square.link}
        key={square.image || square.link && square.link.text}
      />)}
  </div>
);

export default SquaresGrid;
