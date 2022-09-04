import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../ThemeConfig";
import useDarkMode from 'use-dark-mode';

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)
  const darkmode = useDarkMode(true)
  const theme = darkmode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button onClick={darkmode.toggle}>Switch Mode</button>
      <button onClick={darkmode.enable}>Dark Mode</button>
      <button onClick={darkmode.disable}>Light Mode</button>
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  )
}

export default MyApp;
