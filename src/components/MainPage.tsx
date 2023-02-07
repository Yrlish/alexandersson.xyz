import React from "react"
import { Container, Grid, IconButton, Stack, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import { GitHub, Twitter } from "@mui/icons-material"
import IconBlock from "./IconBlock"
import ExperienceTimeline from "./ExperienceTimeline"
import { MastodonIcon } from "./MastodonIcon"

export default function MainPage(): JSX.Element {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
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
          <IconButton href={"https://twitter.com/Yrlish"} target={"_blank"} rel="noreferrer" title={"Twitter"}>
            <Twitter/>
          </IconButton>
          <IconButton
            href={"https://mastodon.clearly.rocks/@dennis"} target={"_blank"} rel={"noreferrer,me"} title={"Mastodon"}
          >
            <MastodonIcon/>
          </IconButton>
          <IconButton href={"https://github.com/Yrlish"} target={"_blank"} rel="noreferrer" title={"GitHub"}>
            <GitHub/>
          </IconButton>
        </Stack>
      </Toolbar>
      <IconBlock/>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            My primary interest is software development, my main focus is towards backend Java and my secondary is
            towards frontend web. I have many years of professional experience with both. Because of my interest
            in learning systems I also have knowledge of managing some DevOps stuff.
          </Typography>
          <Typography>
            Currently I do not have any publically maintained projects, but there are some old repositories available on my GitHub.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <ExperienceTimeline/>
        </Grid>
      </Grid>
    </Container>
  )
}
