import React, { useState,useEffect } from 'react';
import './App.css';
import Select from 'react-select';

function App() {
  const data = [
    {
      Value: 1,
      label: "Netherlands",
    },
    {
      value: 2,
      label: "England",
    },
    {
      value: 3,
      label: "France",
    },
  ];

  const [query, setQuery] = useState('England');
  const [search, setSearch] = useState(' ');
  // use effect takes an arrow function as a parameter, when the app renders the first time, it runs useEffect
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.covid19api.com/premium/country/data/${query}`
    );
    const data = await response.json();
    setSearch(data.hits);
    console.log(data);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch(' '); // after we click enter to run the search it cleans the search field
  };

  return (
    <div className="App">
      Dropdown Menu... <br />
      <Select onChange= {setQuery} options={data} />
    </div>
  );
}

export default App;
