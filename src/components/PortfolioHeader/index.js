import React from 'react';
import * as userDetails from '../../data.json';
import { HeaderFile } from '../HeaderFile';
import './styles.css';

const ProtfolioHeader = (props) => {
  const appHeader = <p style={{ marginBottom: "4px" }}>
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
  const stylesHeader = {
    backgroundColor: color,
    color: props.color,
    borderBottom: color === "" ? "0px" : "0.3px solid #D9B08C",
  }
  return <HeaderFile displayText={appHeader} stylesHeader={stylesHeader} />
};

export default ProtfolioHeader;


