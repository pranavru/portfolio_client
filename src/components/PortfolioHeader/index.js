import React from 'react';
import * as userDetails from '../../data.json';
import { HeaderFile } from '../HeaderFile';
import './styles.css';

const ProtfolioHeader = () => {
  const appHeader = <p>
    <span className="firstName">{userDetails.user.first_name} </span>
    <span className="lastName">{userDetails.user.last_name}</span>
  </p>;
  return <HeaderFile displayText={appHeader} />
};

export default ProtfolioHeader;


