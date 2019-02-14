import React from 'react';
import { Route } from 'react-router-dom';
import auth from '../../utils/auth';

interface GuardedRouteProps {
  path: string;
  component: any;
}

const GuardedRoute = ({ component: Component, path }: GuardedRouteProps) => {
  return (
    <Route exact path={path} render={(props) => {
      if (!auth.isAuthenticated()) {
        auth.login();
        return null;
      }
      return <Component {...props} />
    }} />
  );
}

export default GuardedRoute;