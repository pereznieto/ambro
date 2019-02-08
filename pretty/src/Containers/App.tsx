import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SquaresGrid from '../Components/SquaresGrid/SquaresGrid';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Inspiration from '../Components/Inspiration/Inspiration';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import PostWrapper from '../Components/PostWrapper/PostWrapper';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

const App = () => (
  <div className={styles.app}>
    <ApolloProvider client={client}>
      <Router>
        <ScrollToTop>
          <header>
            <Link to="/" className={styles.app_header_link}>
              <h1 className={styles.app_header}>Ambro</h1>
            </Link>
          </header>
          <Switch>
            <Route exact path="/" component={SquaresGrid} />
            <Route path="/post/:id" component={PostWrapper} />
            <Route path="/edit/:id" component={PostWrapper} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/inspiration" component={Inspiration} />
          </Switch>
        </ScrollToTop>
      </Router>
    </ApolloProvider>
  </div>
);

export default App;
