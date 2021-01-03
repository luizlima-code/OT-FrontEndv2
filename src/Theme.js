import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: "#F79C60",
    primaryLight: "#FFF3F3",
    secondary: "#140083",
    light: "#FFFFFF"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme = { theme }> { children } </ThemeProvider>
)

export default Theme