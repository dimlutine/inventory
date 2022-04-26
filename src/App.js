import "./App.css";
import Info from "./Info.js";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
    </div>
  );
}

function AddItem() {
  return (
    <form>
      <label htmlFor="" className="for">
        Type something:{" "}
      </label>
      <input type="text" id="text-form" />
    </form>
  );
}

export default App;
