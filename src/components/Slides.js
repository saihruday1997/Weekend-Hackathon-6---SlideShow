import React, { Component, useState } from "react";
import "../styles/App.css";

const Slides = (props) => {
  const [index, setIndex] = useState(0);
  const [nextdis, setNextdis] = useState(false);
  const [prevdis, setPrevdis] = useState(false);
  const [resetdis, setResetdis] = useState(true);

  return (
    <>
      <h1 data-testid="title">{props.slidesList[index].title}</h1>
      <p data-testid="text">{props.slidesList[index].text}</p>
      <button
        data-testid="button-prev"
        disabled={prevdis}
        onClick={
          index === 0
            ? setPrevdis(true)
            : (() => {
                setIndex(index - 1);
                setPrevdis(false);
              })()
        }
      >
        PREV
      </button>
      <button
        data-testid="button-next"
        disabled={nextdis}
        onClick={
          index === props.slidesList.length - 1
            ? setNextdis(true)
            : (() => {
                setIndex(index + 1);
                setNextdis(false);
              })()
        }
      >
        NEXT
      </button>
      <button
        data-testid="button-restart"
        disabled={resetdis}
        onClick={
          index !== 0
            ? (() => {
                setResetdis(false);
                setIndex(0);
              })()
            : setResetdis(false)
        }
      >
        RESTART
      </button>
    </>
  );
};

export default Slides;
