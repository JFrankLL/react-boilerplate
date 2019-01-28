import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Styles
import './NavbarStyles.css';
// Utils
import Connect from '../../utils/connect';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-container">
          Navbar
          <Link to="/private">private</Link>
        </div>
      </div>
    );
  }
}

export default Connect(Navbar);
