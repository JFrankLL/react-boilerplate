import React from 'react';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
// Components
import PrivateRoute from './PrivateRoute';
import App from '../../containers/App';
// Layout HOC
import withLayout from '../withLayout';

const NoMatch = () => <div>404</div>;

const Private = () => <Link to="/private">private</Link>;

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={withLayout(App)} />
      <PrivateRoute isLayoutEnabled exact path="/private" component={withLayout(Private)} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
