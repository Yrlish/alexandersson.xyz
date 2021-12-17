import React from "react"
import Typist from "react-typist"
import { Box, responsiveFontSizes, ThemeProvider, Typography, useTheme } from "@mui/material"

import "./AnimatedIntro.css"

export default function AnimatedIntro(props: { setDone: () => void }): JSX.Element {
  const theme = responsiveFontSizes(useTheme())

  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant={"h2"}
        fontFamily={"Roboto Mono"}
        height={"100%"}
        display={"flex"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Box
          flex={1}
          component={Typist}
          startDelay={1000}
          cursor={{
            element: "_",
          }}
          onTypingDone={props.setDone}
        >
          Hello.
          <Typist.Backspace count={6} delay={1000}/>
          <Typist.Delay ms={500}/>
          I am Dennis.
          <Typist.Backspace count={12} delay={1000}/>
          <Typist.Delay ms={500}/>
          And I make apps.
          <Typist.Backspace count={16} delay={1000}/>
          <Typist.Delay ms={500}/>
        </Box>
      </Typography>
    </ThemeProvider>
  )
}
