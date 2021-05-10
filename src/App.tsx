import React from "react";
import { Header } from "./components";
import { Global } from "@emotion/react";
import GlobalStyle from "./Styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Header />
      <div>타입스크립트 무비</div>
    </>
  );
};

export default App;
