import React, { useState } from "react"
import AnimatedIntro from "./AnimatedIntro"

export default function App(): JSX.Element {
  const [ introDone, setIntroDone ] = useState(false)

  return (
    <>
      {!introDone && (
        <AnimatedIntro setDone={() => setIntroDone(true)}/>
      )}
      {introDone && (
        <div>
          intro done, show about text
        </div>
      )}
    </>
  )
}
