import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { HideOnScroll } from "../Navbar/index";
import './styles.css';

export const NavigationDisplay = (props) => {
  return <HideOnScroll {...props}>
    <AppBar color="transparent" style={{ zIndex: 10, border: '0px' }}>
      <div className="row col-md-12 col-12" style={{ margin: '0.3%', marginLeft: '1%' }}>
        <button className="navButtons">Home</button>
        <button className="navButtons">Work Experience</button>
        <button className="navButtons">Projects</button>
      </div>
    </AppBar>
  </HideOnScroll>;
}
