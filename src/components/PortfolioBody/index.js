import React from 'react';
import { PortfolioBodyLeftCard } from '../PortfolioBodyLeftCard';
import { PortfolioBodyRightCard } from '../PortfolioBodyRightCard';
import './styles.css';

const PortfolioBody = () => {
  return (
    <div className="portfolioBody col-md-12 col-12 row">
      <PortfolioBodyLeftCard />
      <PortfolioBodyRightCard />
    </div>
  );
}

export default PortfolioBody;


