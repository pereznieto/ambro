import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SquaresGrid from '../Components/SquaresGrid/SquaresGrid';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Inspiration from '../Components/Inspiration/Inspiration';

const App = () => (
  <div className={styles.app}>
    <header>
      <a href="/" className={styles.app_header_link}><h1 className={styles.app_header}>Ambro</h1></a>
    </header>
    <Router>
      <Switch>
        <Route exact path="/" component={SquaresGrid} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/inspiration" component={Inspiration} />
      </Switch>
    </Router>
  </div>
);

export default App;
