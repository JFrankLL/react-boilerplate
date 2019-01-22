import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// Components
import App from '../../containers/App';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
    </BrowserRouter>
  );
};

export default Routes;
