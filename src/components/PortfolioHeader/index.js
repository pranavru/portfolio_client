import React from 'react';
import * as userDetails from '../../data.json';
import { HeaderFile } from '../HeaderFile';
import './styles.css';

const ProtfolioHeader = (props) => {
  const appHeader = <p>
    <span className="firstName">{userDetails.user.first_name} </span>
    <span className="lastName">{userDetails.user.last_name}</span>
  </p>;
  const [color, setColor] = React.useState("");
  window.addEventListener('scroll', (event) => {
    if (window.scrollY > 35) {
      setColor('#ffffff');
    } else {
      setColor('');
    }
  })
  return <HeaderFile displayText={appHeader} bgColor={color} color={props.color} />
};

export default ProtfolioHeader;


