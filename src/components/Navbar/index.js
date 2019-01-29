import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Styles
import './NavbarStyles.css';
// Utils
import Connect from '../../utils/connect';

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div className="navbar">
        <div className="navbar-container">
          Navbar
          <Link to="/">Home</Link>
          <Link to="/private">Private</Link>
          <Link to="/lie">404</Link>
        </div>
      </div>
    );
  }
}

export default Connect(Navbar);
