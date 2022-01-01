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
          Jan 2022 -<br/>
          present
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
            Sogeti
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
          Aug 2015 -<br/>
          Dec 2021
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
            Combitech
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
            NTI Gymnasiet
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
