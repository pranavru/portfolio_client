import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import PortfolioBody from "../PortfolioBody";
import ProtfolioHeader from "../PortfolioHeader";
import { Button, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

function HideOnScroll(props) {
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
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

export default function Navbar(props) {
  return (
    <React.Fragment>
      <ProtfolioHeader />
      <HideOnScroll {...props}>
        <AppBar color="inherit" style={{ marginTop: '80px', zIndex: 10, border: '0px' }}  >
          <div className="row col-md-12 col-12" style={{ margin: '0.3%', marginLeft: '1%' }}>
            <Button variant="outlined" style={{ borderRadius: '36px', marginRight: '1%', zIndex: 101 }}>Home</Button>
            <Button variant="outlined" style={{ borderRadius: '36px', marginRight: '1%' }}>Work Experience</Button>
            <Button variant="outlined" style={{ borderRadius: '36px', marginRight: '1%' }}>Projects</Button>
          </div>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <Box my={-3}>
        <PortfolioBody />
      </Box>
      <ScrollTop {...props}>
        <Fab color="inherit" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}