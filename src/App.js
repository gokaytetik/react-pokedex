import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components

import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Pokemon from "./components/Pokemon/Pokemon";

//Style

import "./style/boilerplate.scss";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/pokemon/:pokemonName" element={<Pokemon />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
};

export default App;
