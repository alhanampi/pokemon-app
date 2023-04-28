import React, { FC, useState } from "react";
import MainScreen from "./components/MainScreen";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/globals";
import {Globals} from "./styles/globals";
import Footer from "./components/Footer";
import Header from "./components/Header";

const GlobalStyles = createGlobalStyle`${Globals}`;

const App: FC = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? darkTheme : lightTheme;
  });

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <MainScreen />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
