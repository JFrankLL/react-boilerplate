import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// Components
import App from '../../containers/App';

const NoMatch = () => <div>404</div>;

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route component={NoMatch} />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
