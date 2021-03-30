import React, {useState} from 'react';
import CountryCodesList from "./countriesCodesList";
import useFetch  from "../../CustomHooks/useFetch";

function TravelRestrictionsDisplay() {

  const[countryCode, setCountryCode] = useState("POL")

  // const [countryData, setCountryData]= useState(""); 

let BACKEND_URL = `https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/actions`
let country = useFetch(`${BACKEND_URL}/${countryCode}/2021-03-10`,[countryCode])


console.log(country)
// let policyType = country.policyActions[8].policy_type_display

// if (policyType=!undefined){
//   console.log(policyType)
// } 

function handleChange(e){
  setCountryCode(e.target.value)
}

  return (
    <div>
      <CountryCodesList handleChange={handleChange}/>

<div style={{width:"50%"}}>
  <p>{`Confirmed cases: ${country.stringencyData.confirmed}`}</p>
  {/* <p>{`Workplace Restrictions: ${country.policyActions[1].policy_value_display_field}`}</p> */}
  {/* <p>{`International Travel Restrictions: ${country.policyActions[7].policy_value_display_field}`}</p> */}
  {/* <p>{`Notes: ${country.policyActions[7].notes}`}</p> */}

</div>
    </div>
  )
}

export default TravelRestrictionsDisplay;







