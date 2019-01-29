import React, { Component } from 'react';
// Redux
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './redux/reducers';
// Routes
import Routes from './components/Routes';

// Logger with default options
const logger = createLogger({
  predicate: true,
  collapsed: true,
  duration: true,
});

const middlewares = [];
middlewares.push(thunk);
middlewares.push(logger);

const store = createStore(rootReducer, applyMiddleware(...middlewares));

class MainApp extends Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default MainApp;
