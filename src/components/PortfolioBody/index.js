import React from 'react';
import { ImportantLinks } from '../ImportantLinks';
import { PortfolioBodyLeftCard } from '../WorkExperience';
import { PortfolioBodyRightCard } from '../PortfolioBodyRightCard';
import { ProjectsInformation } from '../ProjectsInformation';
import colors from '../ProjectsInformation/css-colors';
import './styles.css';
import { Card } from '@material-ui/core';
import { PortfolioBodyCardHeader } from '../PortfolioBodyCardHeader';

const PortfolioBody = () => {
  const height = window.innerHeight >= 785 ? '86vh' : '79vh';
  function on() {
    document.getElementById("overlay").style.display = "block";
  }

  function off() {
    document.getElementById("overlay").style.display = "none";
  }

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
      <div style={{ margin: "1% 2.5%" }}>
        <Card>
          <PortfolioBodyCardHeader header="Projects" style={{ fontSize: '22px' }} />
        </Card>
        {colors.map((color, index) => (
          <React.Fragment >
            <ProjectsInformation key={color} >
              <Card style={{ margin: "0.75% 0px", padding: '0.5%', border: "0.3px solid #D9B08C" }} id="projectCard" onMouseOver={() => on()}>
                <img src={color} style={{ width: "100%", maxHeight: "300px" }} />
              </Card>
              <div id="overlay" onMouseOut={() => off()}>
                <div id="text">Overlay Text</div>
              </div>
            </ProjectsInformation>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment >
  );
}

export default PortfolioBody;