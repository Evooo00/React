import "./App.css";
import { products } from "./products";
import React, { useState } from "react";

console.log(products);
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    setInputValue(event.target.value);
  };

  const handleItemClick = (value) => {
    setInputValue(value);
    setSearchTerm("");
  };

  const results = !searchTerm
    ? []
    : products.filter((product) =>
        product.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
      );

  return (
    <div className="container">
      <h1>Recipe searcher</h1>
      <input
        className="searchingProductInput"
        placeholder="Search for a product"
        onChange={handleChange}
        value={inputValue}
      />
      <div className="selectedProducts">
        {results.map((item) => (
          <div key={item} onClick={() => handleItemClick(item)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
