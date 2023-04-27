import React from "react";
import MainScreen from "./components/MainScreen";
import { createGlobalStyle } from "styled-components";
import Globals from "./styles/globals";
import Footer from "./components/Footer";

const GlobalStyles = createGlobalStyle`${Globals}`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <MainScreen />
      <Footer />
    </div>
  );
}

export default App;
