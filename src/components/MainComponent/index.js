import React, { Component } from 'react'
import './styles.css'
import Navbar from '../Navbar';
import { PortfolioFooter } from '../PortfolioFooter';

class MainComponent extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PortfolioFooter />
      </div>
    );
  }
}

export default MainComponent;
