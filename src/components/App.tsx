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
import { Code, GitHub, Handyman, Public, Twitter } from "@mui/icons-material"

export default function App(): JSX.Element {
  const [ introRunning, setIntroRunning ] = useState(true)
  const [ introDone, setIntroDone ] = useState(false)

  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <>
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
        <Container>
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
              <IconButton href={"https://twitter.com/Yrlish"} target={"_blank"}>
                <Twitter/>
              </IconButton>
              <IconButton href={"https://github.com/Yrlish"} target={"_blank"}>
                <GitHub/>
              </IconButton>
            </Stack>
          </Toolbar>
          <Grid container>
            <Grid item xs={12} md>
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
            <Grid item xs={12} md>
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
            <Grid item xs={12} md>
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
          <Typography paragraph>
            My primary interest is software development, my main focus is towards backend Java and my secondary is
            towards frontend web. I have multiple years of professional experience with both. Because of my interest
            in learning systems I also have knowledge of managing some DevOps stuff.
          </Typography>
        </Container>
      </Slide>
    </>
  )
}

