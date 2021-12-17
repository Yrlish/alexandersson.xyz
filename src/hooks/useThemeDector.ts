import { useEffect, useState } from "react"

export default function useThemeDetector(): boolean {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches
  const [ isDarkTheme, setIsDarkTheme ] = useState(getCurrentTheme())

  const mediaQueryListener = (event: MediaQueryListEvent) => {
    setIsDarkTheme(event.matches)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    mediaQuery.addEventListener("change", mediaQueryListener)
    return () => mediaQuery.removeEventListener("change", mediaQueryListener)
  }, [])

  return isDarkTheme
}
