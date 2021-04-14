import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyles from "../../styles/GlobalStyles";
import Footer from "../footer/footer";
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
    <Footer />
  </ThemeProvider>
);

export default Layout;
