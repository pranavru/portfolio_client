import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import * as user from '../../data.json';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: "0.5%"
  },
  detail: {
    font: "12px lightItalic",
    marginBottom: '0px'
  },
  dotColor: {
    backgroundColor: '#D9B08C'
  },
  paragraph: {
    margin: "4.9% 0px",
    padding: "6% 3%",
    paddingLeft: '0%',
    font: "14px ZS_semibold",
    color: "#616466",
  },
  date: {
    font: '12px ZS_medium',
    color: "#D9B08C"
  },
  timeLineItem: {
    padding: '0px',
    margin: '0px'
  }
}));

export default function CustomizedTimeline() {
  const classes = useStyles();
  const timeline = user.default.user.timeline;
  return (
    <Timeline align="left" className={classes.timeLineItem}>
      {timeline.map(t =>
        <TimelineItem >
          <TimelineOppositeContent>
            <Typography variant="body1" color="textSecondary" className={classes.timeLineItem} >
              <p className={classes.paper}>&nbsp;</p>
              <p className={classes.paragraph}>{t.name}</p>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator >
            <TimelineDot variant="filled" TimelineDotClassKey="outlinedSecondary" className={classes.dotColor} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className={classes.detail}>{t.industry_domain} <span> ({t.description})</span></p>
            <span className={classes.date}>{t.startDate.month} '{t.startDate.year} - {t.endDate.month} '{t.endDate.year}</span>
          </TimelineContent>
        </TimelineItem>
      )}
      <TimelineItem className={classes.detail}>
        <TimelineDot variant="filled" TimelineDotClassKey="outlinedSecondary" className={classes.dotColor} />
        <TimelineContent></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

