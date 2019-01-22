import React, { Component } from 'react';
// Redux
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/reducers';
import { createLogger } from 'redux-logger';
// Routes
import Routes from './components/Routes';

// Logger with default options
const logger = createLogger({
  predicate: true,
  collapsed: true,
  duration: true,
});
const store = createStore(rootReducer, applyMiddleware(logger));

class MainApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default MainApp;
