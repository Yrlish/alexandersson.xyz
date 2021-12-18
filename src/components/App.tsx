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
          <Toolbar>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aperiam at aut, cum distinctio dolor
            esse ex hic ipsa iusto molestias non optio sequi totam unde velit vero voluptate.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam distinctio doloremque ducimus
            excepturi explicabo incidunt nihil qui sint voluptate. Ipsum possimus sed suscipit. Deserunt dolorum eaque
            iste similique temporibus?
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eligendi expedita modi necessitatibus
            nesciunt nulla officiis recusandae unde voluptates. Dignissimos doloremque earum ipsa minima minus mollitia
            numquam odio quis recusandae.
          </Typography>
        </Container>
      </Slide>
    </>
  )
}

