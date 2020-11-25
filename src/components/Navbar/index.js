import React from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import PortfolioBody from "../PortfolioBody";
import ProtfolioHeader from "../PortfolioHeader";
import { Toolbar } from "@material-ui/core";
import { NavigationDisplay } from "../NavigationDisplay";
// import { KeyBoardUpArrow } from "../KeyBoardArrowButton";
import Fab from "@material-ui/core/Fab";
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@material-ui/icons";
import ParticlesBg from 'particles-bg';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

export function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined, disableHysteresis: true,
    threshold: 25,
  });
  return React.cloneElement(
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>,
    { elevation: 0 });
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? 30 : undefined,
    disableHysteresis: true,
    threshold: 75
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root} style={{ outline: "none" }} >
        {children}
      </div>
    </Zoom >
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

export default function Navbar(props) {
  return (
    <React.Fragment>
      <ParticlesBg type="cobweb" bg={true} height="90vh" />
      <NavigationDisplay props />
      <Toolbar id="back-to-top-anchor" />
      <Box my={-2}>
        <ProtfolioHeader color='#2C3531' />
        <PortfolioBody />
      </Box>
      <ScrollTop {...props}>
        <Fab color="inherit" size="small" aria-label="scroll back to top" className="keyBoardArrowButton">
          <KeyboardArrowUpRounded color="#FFCB9A" htmlColor="#116466" />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

const KeyBoardUpArrow = (props) => {
  return <Fab color="inherit" size="small" aria-label="scroll back to top" className="keyBoardArrowButton">
    {/* {props.upArrow === true ? */}
    {/* <KeyboardArrowUpRounded color="#FFCB9A" htmlColor="#116466" /> : */}
    <KeyboardArrowDownRounded color="#FFCB9A" htmlColor="#116466" />
    {/* } */}
  </Fab>;
}
