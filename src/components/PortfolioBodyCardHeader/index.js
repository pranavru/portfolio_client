import React from 'react';
import { HeaderFile } from '../HeaderFile';
import './styles.css';

export const PortfolioBodyCardHeader = () => {
  const header = <p className="heading">Important Links</p>;
  return (
    <HeaderFile displayText={header} bgColor="#2C3531" />
  );
}