import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// Services
import auth from '../../../services/auth';

const renderComponent = (props, Component) => {
  const logged = auth.isLogged();
  if (logged) {
    return <Component {...props} />;
  }
  const session = auth.signIn();
  if (session) {
    return <Component {...props} />;
  }
  return <Redirect to="/" />;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => renderComponent(props, Component)} />;
};

export default PrivateRoute;
