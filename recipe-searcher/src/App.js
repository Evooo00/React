import "./App.css";
import { products } from "./products";
import { recipes } from "./recipes";
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const searchedProducts = document.querySelector(".searchedProducts");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleOnClick = (value) => {
    setInputValue(value);
    setSearchTerm(value);
  };

  if (!searchTerm) {
    searchedProducts.classList.add("showOrHideSearchedProducts");
  } else {
    searchedProducts.classList.remove("showOrHideSearchedProducts");
  }

  const results = !searchTerm
    ? []
    : products.filter((product) => {
        return product
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
      });

  const newFilteredRecipes = !searchTerm
    ? recipes
    : recipes.filter((recipe) =>
        recipe.ingredients.some((ingredient) =>
          ingredient
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase()),
        ),
      );
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
      <div className="filteredRecipes">
        {newFilteredRecipes.map((recipe) => (
          <div className="recipe" key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>
              <h5>Ingredients:</h5>
              {recipe.ingredients.join(", ")},
            </p>
            <a href={recipe.link}>Link</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
