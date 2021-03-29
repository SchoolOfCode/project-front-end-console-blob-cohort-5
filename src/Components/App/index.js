import React, {useState, useEffect} from 'react';
import UKPage from "../UKMainPageComponent/index";
import WorldPage from '../WorldMainPageComponent';
import css from './App.css';
import CountryCodesList from './countriesCodesList';


function App () {

const[countryCode, setCountryCode] = useState("POL")

  const [countryData, setCountryData]= useState(""); 

let BACKEND_URL = `https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/actions`



useEffect(()=> {
async function fetchCountryData(countryCode) {
    let response = await fetch(`${BACKEND_URL}/${countryCode}/2021-02-26`);
    let data = await response.json();
    setCountryData(data);
    console.log(data);
  }
  fetchCountryData(countryCode)
    },[countryCode]
)

function handleChange(e){
  setCountryCode(e.target.value)
}

return (
<>

<CountryCodesList handleChange={handleChange}/>



<div>
  <p></p>
  <p></p>
  <p></p>
</div>

</>
   
  )
};

export default App;