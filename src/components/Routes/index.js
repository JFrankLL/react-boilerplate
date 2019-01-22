import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components
import PrivateRoute from './PrivateRoute';
import App from '../../containers/App';

const NoMatch = () => <div>404</div>;

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <PrivateRoute exact path="/private" component={() => <div>private</div>} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
