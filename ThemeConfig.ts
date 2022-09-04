import { createGlobalStyle, DefaultTheme } from "styled-components"

interface IGlobalTheme {
  body: string
  text: string
  toggleBorder: string
  background: string
}

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => (theme as IGlobalTheme).body};
    color: ${({ theme }) => (theme as IGlobalTheme).text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`