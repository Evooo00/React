import "./App.css";
import { products } from "./products";
import { recipes } from "./recipes";
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const searchedProducts = document.getElementById("searchedProducts");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleOnClick = (value) => {
    setInputValue(value);
    setSearchTerm("");
  };

  const results = !searchTerm
    ? []
    : products.filter((product) => {
        return product
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
      });
  return (
    <div className="container">
      <h1>Recipe searcher</h1>
      <div className="inputAndButton">
        <input
          className="searchingProductInput"
          placeholder="Search for a product"
          onChange={handleChange}
          value={inputValue}
        />
        {/* <button className="buttonForAddingProducts">Add</button> */}
      </div>

      <div id="searchedProducts" className="searchedProducts">
        {results.map((item) => (
          <div
            className="product"
            key={item}
            onClick={() => handleOnClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="selectedProducts">
        {recipes.map((recipe) => (
          <div key={recipe.id}>{recipe.ingredients}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
