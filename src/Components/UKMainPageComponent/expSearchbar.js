
import React, { useEffect, useState } from 'react';
import SearchBar from "../SearchComponent";
import UkGovApiDisplay from '../UKGov API Component/index.js';
import axios from "axios";
import ComboBox from '../AutoComplete';
/* eslint-disable no-use-before-define */
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


function UKCountySearch() {
  const [results, setResults] = useState([]);
  const [searchCountry, setSearchCountry] = useState("") 
  const [search, setSearch] = useState(0)
  
  
  let DATE = new Date().toISOString().substr(0, 10);

  let URL = `https://api.coronavirus.data.gov.uk//v1/data?filters=date=2021-04-01&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","areaType":"areaType","cases":{"daily":"newCasesByPublishDate","cumulative":"cumCasesByPublishDate"},"deaths":{"daily":"newDeathsByDeathDate","cumulative":"cumDeathsByDeathDate"},"Rate":{"PublishDate":"cumCasesByPublishDateRate"}}`

  useEffect(() => {
    axios
      .all([
        axios.get(URL),
      ])
      .then(responseArr => {
        setResults(responseArr[0].data.data);
        console.log(responseArr[0].data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  let countryArray=[]
useEffect(() => {
    results.forEach((value,i)=>{
        countryArray[i] = value.areaName
        return countryArray
    })
    
let select = document.getElementById( 'counties' );
countryArray.forEach((value, i)=> {
select.add( new Option( value, i ) );

});
    
}, [results])


function handleSearch(e){
    setSearch(e.target.value)
    // setSearch(inputValue)
}



// const options = results.map((data) => {
//     const Region = data.areaType.toUpperCase();
//     return {
//       Region: /[a]/.test(Region) ? '0-9' : Region,
//       ...data,
//     };
//   });
//   const [value, setValue] = React.useState(options[0]);
//   const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>UK Test Page</h2>

      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div> */}
      {/* <div>{`inputValue: '${inputValue}'`}</div> */}

        <UkGovApiDisplay data={results} search={search}/>
        <select id="counties" onChange={handleSearch} ></select>

{/* <ComboBox/>
        <Autocomplete
        
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}

        id="grouped-demo"
      options={options.sort((a, b) => -b.Region.localeCompare(a.Region))}
      groupBy={(data) => data.areaType}
      getOptionLabel={(data) => data.areaName}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search a Region" variant="outlined" />}
    />   */}
       
        
    </div>
  );

}
export default UKCountySearch;