import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// Services
import auth from '../../../services/auth';

const renderComponent = (props, Component) => {
  const logged = auth.isLogged();
  console.log(props);
  if (logged) {
    return <Component {...props} />;
  } else {
    const session = auth.signIn();
    if (session) {
      return <Component {...props} />;
    }
    return <Redirect to="/" />;
  }
};

const PrivateRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={props => renderComponent(props, component)} />
  );
};

export default PrivateRoute;
