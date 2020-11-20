import React from 'react';
import './styles.css';

export const HeaderFile = (props) => {
  return (
    <div className="portfolioHeader">
      <div>
        {props.displayText}
      </div>
    </div>
  );
}
