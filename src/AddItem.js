import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const addItemButtonPressed = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };
  return (
    <div className="container">
      <div className="row">
        <h2>Add an item</h2>
        <div className="col mt-3">
          <label htmlFor="name-field">Name:</label>
          <input
            className="form-control"
            type="text"
            id="name-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col mt-3">
          <label htmlFor="price-field">Price:</label>
          <input
            className="form-control"
            type="number"
            id="price-field"
            value={price}
            // value={price == 0 ? "" : price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col mt-3">
          <label htmlFor="type-field">Type:</label>
          <input
            className="form-control"
            type="text"
            id="type-field"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="col mt-3">
          <label htmlFor="brand-field">Brand:</label>
          <input
            className="form-control"
            type="text"
            id="brand-field"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4" />
        <button
          className="btn btn-dark col-4"
          type="button"
          onClick={addItemButtonPressed}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddItem;
