import React, { useEffect, useState } from "react"
import AnimatedIntro from "./AnimatedIntro"
import { Box, Slide } from "@mui/material"
import Footer from "./Footer"
import MainPage from "./MainPage"

export default function App(): JSX.Element {
  const [ introRunning, setIntroRunning ] = useState(true)
  const [ introDone, setIntroDone ] = useState(false)

  const skipIntroEvent = () => {
    removeEvent()
    setIntroRunning(false)
  }

  const removeEvent = () => {
    document.removeEventListener("click", skipIntroEvent)
    document.removeEventListener("keypress", skipIntroEvent)
    document.removeEventListener("touchend", skipIntroEvent)
  }

  useEffect(() => {
    document.addEventListener("click", skipIntroEvent)
    document.addEventListener("keypress", skipIntroEvent)
    document.addEventListener("touchend", skipIntroEvent)

    return removeEvent
  }, [])

  return (
    <Box>
      <Slide
        in={introRunning}
        appear={false}
        unmountOnExit
        onExited={() => setIntroDone(true)}
      >
        <Box height={"100vh"} position={"relative"}>
          <AnimatedIntro setDone={() => setIntroRunning(false)}/>
          <Box position={"absolute"} bottom={0} left={0} right={0}>
            <Footer>
              Skip animation by clicking, pressing or touching
            </Footer>
          </Box>
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
          <Footer>
            You can find the source{" "}
            <a href={"https://github.com/Yrlish/alexandersson.xyz"} target={"_blank"} rel="noreferrer">here</a>
          </Footer>
        </Box>
      </Slide>
    </Box>
  )
}

