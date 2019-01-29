import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styles
import logo from './logo.svg';
import './App.css';
// Utils
import Connect from '../../utils/connect';
// Components

class App extends Component {
  _onClickButton = () => {
    const {
      rdx: {
        action: { changeValue, changeValueAsync, get },
      },
    } = this.props;

    get();
    changeValueAsync('text2', 'changed asyncronously');
    changeValue('text', 'changed');
    changeValue('text3', 'added');
  };

  render() {
    const {
      rdx: {
        state: {
          app: { text, text2 },
        },
      },
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit<code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <button type="button" onClick={this._onClickButton}>
            doSomething()
          </button>
          <span>{text}</span>
          <span>{text2}</span>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  rdx: PropTypes.shape({}).isRequired,
};

export default Connect(App);
