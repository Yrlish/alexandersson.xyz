import React from "react"
import { Box, Container, Typography } from "@mui/material"

export default function Footer(): JSX.Element {
  return (
    <Box
      component={"footer"}
      mt={"auto"}
      p={1}
      textAlign={"center"}
    >
      <Container maxWidth={"sm"}>
        <Typography variant={"body2"} fontSize={".65rem"} fontStyle={"italic"} color={"text.secondary"}>
          You can find the source{" "}
          <a href={"https://github.com/Yrlish/alexandersson.xyz"} target={"_blank"} rel="noreferrer">here</a>
        </Typography>
      </Container>
    </Box>
  )
}
