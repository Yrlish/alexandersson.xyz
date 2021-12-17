import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

import "@fontsource/roboto/latin-300.css"
import "@fontsource/roboto/latin-400.css"
import "@fontsource/roboto/latin-500.css"
import "@fontsource/roboto/latin-700.css"

ReactDOM.render(
  <App message="Hello World! Simple Counter App built on ESBuild + React + Typescript"/>,
  document.getElementById("root"),
)
