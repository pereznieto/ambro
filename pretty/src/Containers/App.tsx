import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import About from '../Components/About/About';
import Callback from '../Components/Callback/Callback';
import Contact from '../Components/Contact/Contact';
import DeletePost from '../Components/DeletePost/DeletePost';
import GuardedRoute from '../Components/GuardedRoute/GuardedRoute';
import Inspiration from '../Components/Inspiration/Inspiration';
import PostForm from '../Components/PostForm/PostForm';
import PostWrapper from '../Components/PostWrapper/PostWrapper';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import SquaresGrid from '../Components/SquaresGrid/SquaresGrid';
import auth from '../utils/auth';
import styles from './App.module.scss';
import Error from '../Components/Error/Error';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  request: async operation => {
    operation.setContext((context: any) => ({
      headers: {
        ...context.headers,
        authorization: auth.getIdToken(),
      },
    }));
  },
});

class App extends React.Component {

  async componentDidMount() {
    if (window.location.pathname === '/callback') return;
    try {
      await auth.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error === 'login_required') return;
      console.log(err.error);
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <ApolloProvider client={client}>
          <Router>
            <ScrollToTop>
              <header>
                <Link to="/" className={styles.appHeaderLink}>
                  <h1 className={styles.appHeader}>Ambro</h1>
                </Link>
              </header>
              <Switch>
                <Route exact path="/" component={SquaresGrid} />
                <Route path="/post/:id" component={PostWrapper} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/inspiration" component={Inspiration} />
                <Route path="/callback" component={Callback} />
                <GuardedRoute path="/edit/:id" component={PostWrapper} />
                <GuardedRoute path="/delete/:id" component={DeletePost} />
                <GuardedRoute path="/add" component={PostForm} />
                <Route path="/404" component={Error} />
                <Redirect to="/404" />
              </Switch>
            </ScrollToTop>
          </Router>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
