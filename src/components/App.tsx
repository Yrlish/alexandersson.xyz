import React, { useState } from "react"
import AnimatedIntro from "./AnimatedIntro"
import { Box, Slide } from "@mui/material"
import Footer from "./Footer"
import MainPage from "./MainPage"

export default function App(): JSX.Element {
  const [ introRunning, setIntroRunning ] = useState(true)
  const [ introDone, setIntroDone ] = useState(false)

  const skipIntroEvent = () => {
    document.removeEventListener("click", skipIntroEvent)
    document.removeEventListener("keypress", skipIntroEvent)
    document.removeEventListener("touchend", skipIntroEvent)

    setIntroRunning(false)
  }

  document.addEventListener("click", skipIntroEvent)
  document.addEventListener("keypress", skipIntroEvent)
  document.addEventListener("touchend", skipIntroEvent)

  return (
    <Box>
      <Slide
        in={introRunning}
        appear={false}
        unmountOnExit
        onExited={() => setIntroDone(true)}
      >
        <Box height={"100vh"}>
          <AnimatedIntro setDone={() => setIntroRunning(false)}/>
        </Box>
      </Slide>
      <Slide
        in={introDone}
        direction={"up"}
        mountOnEnter
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          minHeight={"100vh"}
        >
          <MainPage/>
          <Footer/>
        </Box>
      </Slide>
    </Box>
  )
}

