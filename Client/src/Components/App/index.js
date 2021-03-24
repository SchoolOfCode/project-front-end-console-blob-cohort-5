import React from 'react';
import './App.css';
import Select from 'react-select';

function App() {

  const data = [

    {
      Value: 1,
      label: "Netherlands"
    },
    {
      value: 2,
      label: "England"
    },
    {
      value: 3,
      label: "France"
    }
  ];

  return (
    <div className="App">
      Dropdown Menu... <br />

      <Select
        options={data}
      />
    </div>
  );
}

export default App;
