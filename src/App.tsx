import React from "react";
import MainScreen from "./components/MainScreen";
import { createGlobalStyle } from "styled-components";
import Globals from "./styles/globals";
import Footer from "./components/Footer";
import Header from "./components/Header";

const GlobalStyles = createGlobalStyle`${Globals}`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <MainScreen />
      <Footer />
    </div>
  );
}

export default App;
