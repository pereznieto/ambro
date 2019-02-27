import React from 'react';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';

interface NavState {
  isMenuOpen: boolean;
}

export default class Nav extends React.Component<{}, NavState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isMenuOpen: false,
    }
  }

  render() {
    const { isMenuOpen } = this.state;

    return (
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          <h1 className={styles.title}>Ambro</h1>
        </Link>
        <div className={`${styles.menu} ${isMenuOpen ? styles.show : ''}`}>
          <div
            className={styles.toggle}
            onClick={() => { this.setState({ isMenuOpen: !isMenuOpen }); }}
          >
            <div className={styles.lineOne} />
            <div className={styles.lineTwo} />
          </div>
          <Link to="/about" className={styles.link}>
            <span className={styles.linkText}>About</span>
          </Link>
          <Link to="/contact" className={styles.link}>
            <span className={styles.linkText}>Contact</span>
          </Link>
          <Link to="/inspiration" className={styles.link}>
            <span className={styles.linkText}>Inspiration</span>
          </Link>
        </div>
      </header>
    );
  }
}
