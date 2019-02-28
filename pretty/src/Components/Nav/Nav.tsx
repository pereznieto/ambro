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
    const toggleOpen = () => this.setState({ isMenuOpen: !isMenuOpen });

    return (
      <header className={styles.header}>
        <Link to="/" className={styles.titleLink}>
          <h1 className={styles.title}>Ambro</h1>
        </Link>
        <div className={`${styles.menu} ${isMenuOpen ? styles.show : ''}`}>
          <button
            className={styles.toggle}
            onClick={toggleOpen}
          >
            <div className={styles.lineOne} />
            <div className={styles.lineTwo} />
          </button>
          <Link to="/about" onClick={toggleOpen} className={styles.link}>
            <span className={styles.linkText}>About</span>
          </Link>
          <Link to="/contact" onClick={toggleOpen} className={styles.link}>
            <span className={styles.linkText}>Contact</span>
          </Link>
          <Link to="/inspiration" onClick={toggleOpen} className={styles.link}>
            <span className={styles.linkText}>Inspiration</span>
          </Link>
        </div>
      </header>
    );
  }
}
