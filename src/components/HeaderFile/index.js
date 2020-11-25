import React from 'react';
import './styles.css';

export const HeaderFile = (props) => {
  return (
    <div className="portfolioHeader" style={{ backgroundColor: props.bgColor, color: props.color }}>
      {props.displayText}
    </div>
  );
}
