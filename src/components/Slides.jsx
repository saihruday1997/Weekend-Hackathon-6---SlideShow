import React, { Component, useState } from "react";
import "../styles/App.css";

const Slides = (props) => {
  return (
    <>
      <h1 data-testid="title">{props[0].title}</h1>
      <p data-testid="text">{props[0].text}</p>
      <button data-testid="button-prev">PREV</button>
      <button data-testid="button-next">NEXT</button>
      <button data-testid="button-restart">RESTART</button>
    </>
  );
};
