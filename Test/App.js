import React, { useEffect, useState } from "react"
import Recipe from "./Recipe";
import './App.css';

function App() {
  const APP_ID = "fecdd27c";
  const APP_KEY = "847e97ef607ed712669aff2ad4f71547";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(' ');
  const [query, setQuery] = useState('banana');
  // use effect takes an arrow function as a parameter, when the app renders the first time, it runs useEffect
  useEffect(() => {
    getRecipes();
  }, [query]); // we used [] here, so it renders only once, only the first time the page renders " teh [] is called dependency"
  // everytime something rerenders on the page, useEffect also is gonna run. useEffetc is just a function that is gonna run
  // if I add "counter" in the square braces, it will run only when the "counter" changes 

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');// after we click enter to run the search it cleans the search field
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button"
          type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label} // just to get rid of the error in the console that asks for an unique key
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image} //title, calories and image are props thar are passed to the Recipes component
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}
export default App;












