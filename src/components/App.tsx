import React, { useCallback, useState } from "react"
import useThemeDetector from "../hooks/useThemeDector"

export default function App(props: { message: string }): JSX.Element {
  const [ count, setCount ] = useState(0)
  const increment = useCallback(() => {
    setCount(count => count + 1)
  }, [ count ])

  const isDarkTheme = useThemeDetector()

  return (
    <>
      <h1>{props.message}</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <h1>Dark theme: {isDarkTheme ? "dark": "light"}</h1>
    </>
  )
}
