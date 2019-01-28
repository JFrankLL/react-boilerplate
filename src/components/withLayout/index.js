import React from 'react';
import Navbar from '../Navbar';
// Styles
import './styles.css';

const withLayout = Component => class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="layout-content">
          <Navbar />
          <Component />
        </div>
      </div>
    );
  }
};

export default withLayout;
