import React, { Component, useState } from "react";
import "../styles/App.css";
import slides from "../data.js";
import Slides from "Slides.jsx";

const App = () => {
  //console.log(slides);
  return (
    <>
      <Slides slidesList={slides} />
    </>
  );
};

export default App;
