import { Card, Fab } from '@material-ui/core';
import React from 'react';
import { PortfolioBodyCardHeader } from '../PortfolioBodyCardHeader';
import './styles.css';
import * as user from '../../data.json';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

export const PortfolioBodyRightCard = () => {
  console.log(user);
  return <div className="col-md-4 col-12">
    <Card>
      <PortfolioBodyCardHeader />
    </Card>
    <Card style={{ marginTop: '5px', border: "1px solid #D9B08C" }} variant="outlined">
      <div className="linksDiv">
          <Fab color="inherit" size="medium" aria-label="scroll back to top" className="linksButton" >
            <LinkedInIcon color="#2C3531" onClick={() => alert("Yo")} />
          </Fab>
          <Fab color="inherit" size="medium" aria-label="scroll back to top" className="linksButton">
            <GitHubIcon color="#2C3531" onClick={() => alert("Yo")} />
          </Fab>
          <Fab color="inherit" size="medium" aria-label="scroll back to top" className="linksButton">
            <EmailRoundedIcon color="#2C3531" onClick={() => alert("Yo")} />
          </Fab>
          <Fab color="inherit" size="medium" aria-label="scroll back to top" className="linksButton">
            <FacebookIcon color="#2C3531" onClick={() => alert("Yo")} />
          </Fab>
          <Fab color="inherit" size="medium" aria-label="scroll back to top" className="linksButton">
            <TwitterIcon color="#2C3531" onClick={() => alert("Yo")} />
          </Fab>
      </div>
    </Card>
  </div>
}

/**
 * 
 */