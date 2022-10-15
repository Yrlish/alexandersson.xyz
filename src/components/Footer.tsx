import React, {PropsWithChildren} from "react"
import { Box, Container, Typography } from "@mui/material"

export default function Footer(props: PropsWithChildren<{}>): JSX.Element {
  return (
    <Box
      component={"footer"}
      mt={"auto"}
      p={1}
      textAlign={"center"}
    >
      <Container maxWidth={"sm"}>
        <Typography variant={"body2"} fontSize={".65rem"} fontStyle={"italic"} color={"text.secondary"}>
          { props.children }
        </Typography>
      </Container>
    </Box>
  )
}
