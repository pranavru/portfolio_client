import { Fab } from '@material-ui/core';
import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import './styles.css';
import * as user from '../../data.json';

export const ImportantLinks = () => {
  const stylesPS = window.innerHeight >= 785 ? {
    font: "48px ZS_semibold",
    height: '86vh',
    marginTop: '10vh'
  } : {
      font: "40px ZS_semibold",
      height: '79vh',
      marginTop: '5vh'
    };
  const u = user.default.user;
  return <div className="profileCard" style={stylesPS}>
    <p className="profileText">{u.professionalExperienceSummary}</p>
    <hr style={{ backgroundColor: '#2C3531', height: '0.75%', width: '50%' }} />
    <div className="linksDiv">
      <Fab color="inherit" size="medium" aria-label="scroll back to top" className="linksButton" style={{ display: u.links.LinkedIn.visible ? "flex" : "none" }}>
        <LinkedInIcon color="#2C3531" onClick={() => window.location.href = u.links.LinkedIn.link} />
      </Fab>
      <Fab color="inherit" size="medium" aria-label="scroll back to top" className="linksButton" style={{ display: u.links.GitHub.visible ? "flex" : "none" }}>
        <GitHubIcon color="#2C3531" onClick={() => window.location.href = u.links.GitHub.link} />
      </Fab>
      <Fab color="inherit" size="medium" aria-label="scroll back to top" className="linksButton">
        <EmailRoundedIcon color="#2C3531"
          onClick={() => window.location.href = u.email.home.preferred ?
            `mailto:${u.email.home.details}` : u.email.work.preferred ? `mailto:${u.email.work.details}` : ``} style={{ display: u.email.isVisible ? "flex" : "none" }} />
      </Fab>
      <Fab color="inherit" size="medium" aria-label="scroll back to top" className="linksButton" style={{ display: u.links.resume.visible ? "flex" : "none" }}>
        <DescriptionIcon color="#2C3531" onClick={() => window.location.href = u.links.resume.link} />
      </Fab>
      <Fab color="inherit" size="medium" aria-label="scroll back to top" className="linksButton" style={{ display: u.links.medium.visible ? "flex" : "none" }}>
        <TwitterIcon color="#2C3531" onClick={() => window.location.href = u.links.medium.link} />
      </Fab>
      <Fab color="inherit" size="medium" aria-label="scroll back to top" className="linksButton" style={{ display: u.links.twitter.visible ? "flex" : "none" }}>
        <TwitterIcon color="#2C3531" onClick={() => window.location.href = u.links.twitter.link} />
      </Fab>
    </div>
  </div>;
};
