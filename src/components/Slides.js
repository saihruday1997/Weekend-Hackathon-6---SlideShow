import React, { Component, useState } from "react";
import "../styles/App.css";

const Slides = (props) => {
  const [index, setIndex] = useState(0);
  const [nextdis, setNextdis] = useState(false);
  const [prevdis, setPrevdis] = useState(false);
  const [resetdis, setResetdis] = useState(false);

  return (
    <>
      <h1 data-testid="title">{props.slidesList[index].title}</h1>
      <p data-testid="text">{props.slidesList[index].text}</p>
      <button
        data-testid="button-prev"
        disabled={prevdis}
        onClick={setIndex(index - 1)}
      >
        PREV
      </button>
      <button
        data-testid="button-next"
        disabled={nextdis}
        onClick={setIndex(index + 1)}
      >
        NEXT
      </button>
      <button
        data-testid="button-restart"
        disabled={resetdis}
        onClick={setIndex(0)}
      >
        RESTART
      </button>
    </>
  );
};

export default Slides;
