import React from "react"
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab"
import { School, Work } from "@mui/icons-material"
import { Typography } from "@mui/material"

export default function ExperienceTimeline(): JSX.Element {
  return (
    <Timeline position="left" sx={{
      p: 0,
      m: 0,
      "& .MuiTimelineContent-positionLeft": {
        pl: 0,
      },
      "& .MuiTimelineOppositeContent-positionLeft": {
        pr: 0,
      },
    }}>
      <TimelineItem>
        <TimelineOppositeContent
          color="text.secondary"
          variant="body2"
          margin={"auto 0"}
          fontSize={"0.8rem"}
        >
          Feb 2024 - present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ visibility: "hidden" }}/>
          <TimelineDot color={"primary"} variant={"outlined"}>
            <Work/>
          </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent margin={"auto 0"}>
          <Typography>
            <a href={"https://one-group.se"} target={"_blank"} rel={"noreferrer"} style={{ color: "limegreen" }}>
              One Group
            </a>
          </Typography>
          <Typography variant="body2" fontSize={"0.7rem"}>
            Software Engineer
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          color="text.secondary"
          variant="body2"
          margin={"auto 0"}
          fontSize={"0.8rem"}
        >
          Jan 2022 - Jan 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ visibility: "hidden" }}/>
          <TimelineDot color={"secondary"} variant={"outlined"}>
            <Work/>
          </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent margin={"auto 0"}>
          <Typography>
            <a href={"https://sogeti.se"} target={"_blank"} rel={"noreferrer"} style={{ color: "limegreen" }}>
              Sogeti
            </a>
          </Typography>
          <Typography variant="body2" fontSize={"0.7rem"}>
            Software Engineer
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          color="text.secondary"
          variant="body2"
          margin={"auto 0"}
          fontSize={"0.8rem"}
        >
          Aug 2015 - Dec&nbsp;2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector/>
          <TimelineDot color={"secondary"} variant={"outlined"}>
            <Work/>
          </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent margin={"auto 0"}>
          <Typography>
            <a href={"https://combitech.se"} target={"_blank"} rel={"noreferrer"} style={{ color: "limegreen" }}>
              Combitech
            </a>
          </Typography>
          <Typography variant="body2" fontSize={"0.7rem"}>
            Software Developer
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" variant="body2" margin={"auto 0"} fontSize={"0.8rem"}>
          2012 - 2015
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector/>
          <TimelineDot color={"secondary"} variant={"outlined"}>
            <School/>
          </TimelineDot>
          <TimelineConnector sx={{ visibility: "hidden" }}/>
        </TimelineSeparator>
        <TimelineContent margin={"auto 0"}>
          <Typography component="span">
            <a href={"https://ntigymnasiet.se"} target={"_blank"} rel={"noreferrer"} style={{ color: "limegreen" }}>
              NTI Gymnasiet
            </a>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
