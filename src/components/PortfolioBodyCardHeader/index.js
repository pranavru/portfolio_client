import React from 'react';
import { HeaderFile } from '../HeaderFile';
import './styles.css';

export const PortfolioBodyCardHeader = (props) => {
  const header = <p className="heading">{props.header}</p>;
  return (
    <HeaderFile displayText={header} bgColor="#2C3531" color='#ffffff' />
  );
}