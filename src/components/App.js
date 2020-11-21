import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const [index, setIndex] = useState(0);
  const allSlides = props.slides;
  const length = allSlides.length;

  let title = allSlides[index].title;
  let text = allSlides[index].text;

  return (
    <>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="text">{text}</p>
      <button
        data-testid="button-prev"
        disabled={index === 0}
        onClick={() => {
          if (index !== 0) {
            setIndex(index - 1);
          }
        }}
      >
        Prev
      </button>
      <button
        data-testid="button-next"
        disabled={index === length - 1}
        onClick={() => {
          if (index !== length - 1) {
            setIndex(index + 1);
          }
        }}
      >
        Next
      </button>
      <button
        data-testid="button-restart"
        disabled={index === 0}
        onClick={() => setIndex(0)}
      >
        Restart
      </button>
    </>
  );
};

export default App;
