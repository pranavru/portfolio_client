import { Card } from '@material-ui/core';
import React from 'react';
import ProtfolioHeader from '../PortfolioHeader';

export const PortfolioBodyRightCard = () => {
  return <div className="col-md-4 col-12">
    <Card>
      <ProtfolioHeader />
    </Card>
    <Card style={{ marginTop: '1%' }} variant="outlined">
      <div style={{ padding: '0.2%'}}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam vel elit ut aliquam. Aenean condimentum bibendum maximus.
        </p>
      </div>
    </Card>
  </div>;
}
