import React from 'react';
import { ImportantLinks } from '../ImportantLinks';
import { PortfolioBodyLeftCard } from '../WorkExperience';
import { PortfolioBodyRightCard } from '../PortfolioBodyRightCard';
import './styles.css';
import { Macbook } from '../Macbook';

const PortfolioBody = () => {
  const height = window.innerHeight >= 785 ? '86vh' : '79vh';
  // window.addEventListener('scroll', (event) => {
  //   if (window.scrollY > 450) {
  //     window.scrollTo(850);
  //   } else {
  //     window.scrollTo(650);
  //   }
  // })
  return (
    <React.Fragment>

      <div className="col-md-12 col-12 row"  >
        <div className="col-md-6">
          <ImportantLinks />
        </div>
        <div className="profileQuote col-md-6" style={{ height: height }}>
          <img src="./macbook.png" alt="macbook" width="100%" height="70%" className="macbookImgDiv" />
          <div className="whiteBackground">
          </div>
        </div>
      </div>
      <div className="portfolioBody col-md-12 col-12 row">
        <PortfolioBodyLeftCard />
        <PortfolioBodyRightCard />
      </div>
    </React.Fragment>
  );
}

export default PortfolioBody;