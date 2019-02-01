import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SquaresGrid from '../Components/SquaresGrid/SquaresGrid';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Inspiration from '../Components/Inspiration/Inspiration';
import Post from '../Components/Post/Post';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';

const App = () => (
  <div className={styles.app}>
    <Router>
      <ScrollToTop>
        <header>
          <Link to="/" className={styles.app_header_link}>
            <h1 className={styles.app_header}>Ambro</h1>
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={SquaresGrid} />
          <Route path="/post/:id" component={Post} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/inspiration" component={Inspiration} />
        </Switch>
      </ScrollToTop>
    </Router>
  </div>
);

export default App;
