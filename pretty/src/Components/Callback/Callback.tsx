import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import auth from '../../utils/auth';
import LoadingDot from '../LoadingDot/LoadingDot';

interface Props extends RouteComponentProps { }

class Callback extends React.Component<Props> {

  async componentDidMount() {
    await auth.handleAuthentication();
    this.props.history.replace('/');
  }

  render() {
    return <LoadingDot />;
  }
}

export default withRouter(Callback);
