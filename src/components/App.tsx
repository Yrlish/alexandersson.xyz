import React, { useState } from "react"
import AnimatedIntro from "./AnimatedIntro"
import {
  Box,
  Container,
  Grid,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Code, GitHub, Handyman, Public, School, Twitter, Work } from "@mui/icons-material"
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab"

export default function App(): JSX.Element {
  const [ introRunning, setIntroRunning ] = useState(true)
  const [ introDone, setIntroDone ] = useState(false)

  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100vh"}
    >
      <Slide
        in={introRunning}
        appear={false}
        unmountOnExit
        onExited={() => setIntroDone(true)}
      >
        <AnimatedIntro setDone={() => setIntroRunning(false)}/>
      </Slide>
      <Slide
        in={introDone}
        direction={"up"}
        mountOnEnter
      >
        <Container component={"main"}>
          <Toolbar sx={{ px: "0 !important" }}>
            <Typography component={"h1"} variant={mobile ? "body1" : "h6"} sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              flexGrow: 1,
            }}>
              Dennis Alexandersson
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <IconButton href={"https://twitter.com/Yrlish"} target={"_blank"} rel="noreferrer">
                <Twitter/>
              </IconButton>
              <IconButton href={"https://github.com/Yrlish"} target={"_blank"} rel="noreferrer">
                <GitHub/>
              </IconButton>
            </Stack>
          </Toolbar>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Box textAlign={"center"} py={theme.spacing(5)}>
                <Public sx={{ fontSize: theme.typography.h1.fontSize }}/>
                <Typography variant={"h6"}>
                  Web Development
                </Typography>
                <Typography variant={"caption"}>
                  TypeScript, React, esbuild
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign={"center"} py={theme.spacing(5)}>
                <Code sx={{ fontSize: theme.typography.h1.fontSize }}/>
                <Typography variant={"h6"}>
                  Software Development
                </Typography>
                <Typography variant={"caption"}>
                  Java, TypeScript, Python, SQL
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign={"center"} py={theme.spacing(5)}>
                <Handyman sx={{ fontSize: theme.typography.h1.fontSize }}/>
                <Typography variant={"h6"}>
                  DevOps
                </Typography>
                <Typography variant={"caption"}>
                  Git, GitLab, Jenkins, YouTrack, Jira
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography paragraph>
                My primary interest is software development, my main focus is towards backend Java and my secondary is
                towards frontend web. I have many years of professional experience with both. Because of my interest
                in learning systems I also have knowledge of managing some DevOps stuff.
              </Typography>
              <Typography paragraph>
                Currently I do not have any maintained hobby projects, but there are some old repositories available on
                my GitHub.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
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
            </Grid>
          </Grid>
        </Container>
      </Slide>
      <Box
        component={"footer"}
        mt={"auto"}
        px={2}
        py={3}
        textAlign={"center"}
      >
        <Container maxWidth={"sm"}>
          <Typography variant={"body2"} fontStyle={"italic"} color={"text.secondary"}>
            You can find the source{" "}
            <a href={"https://github.com/Yrlish/alexandersson.xyz"} target={"_blank"} rel="noreferrer">here</a>.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

