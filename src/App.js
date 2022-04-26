import "./App.css";
import Info from "./Info.js";
import { PropTypes } from "prop-types";

function App() {
  return (
    <div className="App">
      <Info title="Inventoriorio" />
      <AddItem text="tits" number={96} />
      <AddItem text="bewbs" number={69} />
      <AddItem text="knockers" number={420} />
    </div>
  );
}

function AddItem(props) {
  return (
    <form>
      <label htmlFor="" className="for">
        Type something:{" "}
      </label>
      <input type="text" id="text-form" value={props.value} />
      <br />
      <label htmlFor="" className="for">
        {props.number}
      </label>
    </form>
  );
}

AddItem.PropTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};

export default App;
