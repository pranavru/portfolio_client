import React from 'react';
import './styles.css';

export const HeaderFile = (props) => {
  return (
    <div className="portfolioHeader" style={props.stylesHeader}>
      {props.displayText}
    </div>
  );
}
