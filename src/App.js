import React from "react";

//Components

import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

//Style

import "./style/boilerplate.scss";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Content />
    </React.Fragment>
  );
};

export default App;
