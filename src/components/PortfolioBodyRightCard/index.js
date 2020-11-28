import { Card } from '@material-ui/core';
import React from 'react';
import { PortfolioBodyCardHeader } from '../PortfolioBodyCardHeader';
import './styles.css';
import * as user from '../../data.json';
import CustomizedTimeline from './CustomizedTimeline';

export const PortfolioBodyRightCard = () => {
  console.log(user);
  return <div className="col-md-4 col-12">
    <Card>
      <PortfolioBodyCardHeader header="Projects Timeline" style={{ fontSize: '22px' }} />
    </Card>
    <Card style={{ border: "1px solid #D9B08C" }} variant="outlined">
      <CustomizedTimeline />
    </Card>
  </div>
}