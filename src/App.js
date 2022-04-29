import "./App.css";
import SearchBar from "./SearchBar.js";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});

  const updateData = (searchParams) => {
    setData(searchParams);
  };
  return (
    <div className="App">
      <SearchBar callback={updateData} />
      <p>Name: {"name" in data ? data["name"] : "no data to display"}</p>
      <p>Price: {"price" in data ? data["price"] : "no data to display"}</p>
      <p>Type: {"type" in data ? data["type"] : "no data to display"}</p>
      <p>Brand: {"brand" in data ? data["brand"] : "no data to display"}</p>
    </div>
  );
}

export default App;
