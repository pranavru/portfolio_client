import { Card } from '@material-ui/core';
import React from 'react';
import { PortfolioBodyCardHeader } from '../PortfolioBodyCardHeader';

export const PortfolioBodyLeftCard = () => {
  return <div className="col-md-8">
    <Card>
      <PortfolioBodyCardHeader />
    </Card>
    <Card style={{ marginTop: '5px', border: "1px solid #D9B08C" }} variant="outlined">
      <div style={{ padding: '1%' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam vel elit ut aliquam. Aenean condimentum bibendum maximus. Vivamus eu volutpat turpis. Integer condimentum tellus ut mi tincidunt convallis. Sed nec neque faucibus, lacinia leo sed, fringilla libero. Suspendisse nec lectus libero. Mauris feugiat ipsum in est scelerisque consequat. Proin nec fringilla turpis, id posuere velit. Aliquam quis lacus at dui mollis pharetra. Suspendisse varius neque mi, sit amet vestibulum sem cursus ut.
        </p>
      </div>
    </Card>
  </div>;
}
