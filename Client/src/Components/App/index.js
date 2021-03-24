import React, { useState,useEffect } from 'react';
import './App.css';
import Select from 'react-select';

function App() {
  const data = [
    {
      Value: 1,
      label: "Switzerland",
    },
    {
      value: 2,
      label: "united-kingdom",
    },
    {
      value: 3,
      label: "France",
    },
  ];

  const [query, setQuery] = useState('United-Kingdom');
  const [search, setSearch] = useState(' ');
  // use effect takes an arrow function as a parameter, when the app renders the first time, it runs useEffect
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.covid19api.com/country/${query}/status/confirmed/live?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`
    );
    const resData = await response.json();
    setSearch(resData[0]);
    console.log(resData);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch(' '); // after we click enter to run the search it cleans the search field
  };

  const onClick = () => {
    // e.preventDefault();
    setQuery(data);
  };

  return (
    <div className="App">
      Dropdown Menu... <br />
      <Select onClick= {onClick} options={data} />
    </div>
  );
}

export default App;
