import React from "react"
import { Box, Grid, Typography, useTheme } from "@mui/material"
import { Code, Handyman, Public } from "@mui/icons-material"

export default function IconBlock(): JSX.Element {
  const theme = useTheme()

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Box textAlign={"center"} py={theme.spacing(5)}>
          <Public sx={{ fontSize: theme.typography.h1.fontSize }}/>
          <Typography variant={"h6"}>
            Web Development
          </Typography>
          <Typography variant={"caption"}>
            TypeScript, React, Vue
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
            Git, OpenShift, Tekton, Helm
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
