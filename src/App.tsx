import React from "react";
import MainScreen from "./components/MainScreen";
import { createGlobalStyle } from "styled-components";
import Globals from "./styles/globals";

const GlobalStyles = createGlobalStyle`${Globals}`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <MainScreen />
    </div>
  );
}

export default App;
