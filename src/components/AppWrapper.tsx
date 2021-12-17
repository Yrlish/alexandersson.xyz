import React from "react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import App from "./App"
import { theme } from "../theme"

export default function AppWrapper(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App/>
    </ThemeProvider>
  )
}
