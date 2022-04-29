import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const searchButtonPressed = () => {
    props.callback({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };
  return (
    <div>
      <h2>Search for an item</h2>
      <form action="">
        <label htmlFor="name-field">Name:</label>
        <input
          type="text"
          id="name-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="price-field">Price:</label>
        <input
          type="number"
          id="price-field"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="type-field">Type:</label>
        <input
          type="text"
          id="type-field"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="brand-field">Brand:</label>
        <input
          type="text"
          id="brand-field"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <button type="button" onClick={searchButtonPressed}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
