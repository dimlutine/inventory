import "./App.css";
import Info from "./Info.js";
import { PropTypes } from "prop-types";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Info title="Inventoriorio" />
      <ButtonState />
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("Tittle");
  };

  const updateCountClicked = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Data title={title} count={count} />
      <button onClick={updateTitleClicked}>Update Title </button>
      <button onClick={updateCountClicked}>Update Count </button>
    </div>
  );
}

const Data = (props) => {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count}</p>
    </div>
  );
};

export default App;
