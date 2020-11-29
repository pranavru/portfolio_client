import React from 'react';
import { ImportantLinks } from '../ImportantLinks';
import { PortfolioBodyLeftCard } from '../WorkExperience';
import { PortfolioBodyRightCard } from '../PortfolioBodyRightCard';
import { ProjectsInformation } from '../ProjectsInformation';
import * as user from '../../data.json';
import './styles.css';
import { Card, Fab } from '@material-ui/core';
import { PortfolioBodyCardHeader } from '../PortfolioBodyCardHeader';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

const PortfolioBody = () => {
  const u = user.default.user.projects;
  const height = window.innerHeight >= 785 ? '86vh' : '79vh';
  const [visibleOverlayIndex, setOverlayIndex] = React.useState(null);
  function on(index) {
    setOverlayIndex(index);
  }

  function off() {
    setOverlayIndex(null);
  }

  return (
    <React.Fragment>
      <div className="col-md-12 col-12 row"  >
        <div className="col-md-6">
          <ImportantLinks />
        </div>
        <div className="profileQuote col-md-6" style={{ height: height }}>
          <img src="./macbook.png" alt="macbook" width="100%" height="70%" className="macbookImgDiv" alt="Not found" />
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
        {u.map((pro, index) => (
          <React.Fragment key={index} >
            <ProjectsInformation  >
              <Card style={{ margin: "0.75% 0px", padding: '0.5%', border: "0.3px solid #D9B08C" }} id="projectCard" onClick={() => on(index)}>
                <img src={pro.image} style={{ width: "100%", maxHeight: "300px" }} />
                <div id="projectName">
                  <p>{pro.name}</p>
                </div>
              </Card>
              <div id="overlay" onClick={() => off()} style={{ display: visibleOverlayIndex === index ? "block" : "none" }}>
                <div className="projectDescription" style={{ fontSize: 0.0225 * window.innerHeight }}>{pro.details ? pro.details.map(d => <p>{d}</p>) : <></>}</div>
                <div className="projectFooter">
                  <div className="projectFooterContent">
                    <div className="projectFooterContentText"> Industry - {pro.industry_domain} </div> <div className="projectFooterContentText"> Technology - {pro.description} </div>
                    <div className="row projectFooterLinks">
                      <Fab color="inherit" size="small" aria-label="scroll back to top" href={`https://www.github.com/pranavru/${pro.link}`} style={{ marginRight: '3%' }}>
                        <GitHubIcon />
                      </Fab>
                      <Fab htmlColor="" size="small" aria-label="scroll back to top" href="https://www.github.com/pranavru">
                        <WebIcon />
                      </Fab>
                    </div>
                  </div>
                </div>
              </div>
            </ProjectsInformation>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment >
  );
}

export default PortfolioBody;