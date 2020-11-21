import React from "react";
import Fab from "@material-ui/core/Fab";

export const KeyBoardUpArrow = (props) => {
  return <Fab color="inherit" size="small" aria-label="scroll back to top" className="keyBoardArrowButton">
    {props.upArrow === true ?
      <KeyboardArrowUpRounded color="#FFCB9A" htmlColor="#116466" /> :
      <KeyboardArrowDownRounded color="#FFCB9A" htmlColor="#116466" />
    }
  </Fab>;
}
