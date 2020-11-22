import { Fab } from '@material-ui/core';
import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import './styles.css';

export const ImportantLinks = () => {
  const height = window.innerHeight >= 785 ? '86vh' : '79vh';
  const professionalSummary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  return <div className="profileCard" style={{ height: height }} raised={false}>
    <p className="profileText">{professionalSummary}</p>
    <hr style={{ backgroundColor: '#2C3531', height: '0.75%', width: '50%' }} />
    <div className="linksDiv">
      <Fab color="inherit" size="medium" aria-label="scroll back to top" className="linksButton">
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
  </div>;
};
