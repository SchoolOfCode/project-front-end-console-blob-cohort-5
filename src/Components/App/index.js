import React, {useState, useEffect} from 'react';
import useFetch from '../../CustomHooks/useFetch';
import UKPage from "../UKMainPageComponent/index";
import WorldPage from '../WorldMainPageComponent';
import css from './App.css';
import CountryCodesList from './countriesCodesList'


function App () {

const[countryCode, setCountryCode] = useState("POL")

  // const [countryData, setCountryData]= useState(""); 

let BACKEND_URL = `https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/actions`


let country = useFetch(`${BACKEND_URL}/${countryCode}/2021-03-10`,[countryCode])

console.log(country)
console.log(country)
// let policyType = country.policyActions[8].policy_type_display

// if (policyType=!undefined){
//   console.log(policyType)
// } 


function handleChange(e){
  setCountryCode(e.target.value)
}

return (
<>

<CountryCodesList handleChange={handleChange}/>



<div style={{width:"50%"}}>
  <p>{`Confirmed cases: ${country.stringencyData.confirmed}`}</p>
  {/* <p>{`Workplace Restrictions: ${country.policyActions[1].policy_value_display_field}`}</p> */}
  {/* <p>{`International Travel Restrictions: ${country.policyActions[7].policy_value_display_field}`}</p> */}
  {/* <p>{`Notes: ${country.policyActions[7].notes}`}</p> */}

</div>

</>
   
  )
};

export default App;