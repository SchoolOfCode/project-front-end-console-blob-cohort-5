import React, {useState} from 'react';
import css from './WorldPage.module.css';
import cn from 'classnames';
import SearchBar from '../SearchComponent/index.js';
import TravelRestrictionsDisplay from '../TravelRestrictionsDisplayComponent';
import FlightWidget from '../Fligh Widget Component';

import CountryCodesList from "../CountryCodeList/countriesCodesList";
import useFetch  from "../../CustomHooks/useFetch";
import MyMap from "../World Map Component/MyMap.jsx";



function WorldPage () {

  const[date, setDate] = useState("2021-03-28")
  let API_WORLD_STATS = `https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/actions`

  let date2 = `2021-03-01`
  
  const[countryCode, setCountryCode] = useState("GBR")
  const countryObj = useFetch(`${API_WORLD_STATS}/${countryCode}/${date}`,[countryCode, date]);
  // const countryObj2 = useFetch(`${API_WORLD_STATS}/${countryCode}/${date2}`,[countryCode]);
  function handleChange(e){
  setCountryCode(e.target.value);
}
function handleDate(e){
  setDate(e.target.value);
}

return(
    <div className={css.flexContainer}>

    {/* <SearchBar />
    <TravelRestrictionsDisplay /> */}

  <div className={css.inputRow}>
    <input placeholder={"Check Older Date"} type={"date"} onChange={handleDate} ></input>
    <CountryCodesList handleChange={handleChange}/>
  </div>

    <div className={css.map}>
      <MyMap/>    
        </div>


<div className={css.bottomRow}>
    <div className={css.TravelRestrictionsDisplay}>
      Travel Restrictions Display
      </div>
    <div className={css.flightWidget}>
    <FlightWidget />
      </div>  
    {/* <TravelRestrictionsDisplay data={countryObj} data2={countryObj2} color={"mustardBox"}/> */}
    </div>
    </div>


// //     const [searchCountry, setSearchCountry] = useState("");
// //     const [countryData, setCountryData]= useState(""); 

// //   async function fetchCountriesDB(searchCountry) {
// //     let response = await fetch(`${BACKEND_URL}/country?search=${searchCountry}`);
// //     let data = await response.json();
// //     setCountryData(data);
// //     console.log(data);
// //   }

// //   let wData = {
// //     england: {},
// //     spain: {
// //       countryName: "Spain",
// //       entryRestrictions: "No Entry Allowed",
// //       qurantineRestrictions: "14 day on arrival",
// //     },
// //   };

  

//   return (
//     <div>
//       <SearchBar
//         setSearchCountry={setCountry}
//         searchCountry={country}
//         placeholderText={"Search Country Here"}
//       />
//       {/* searches database and brings back object for country */}
//       <TravelRestrictionsDisplay data={wData[country]} />
//       <FlightWidget />
//       <HotelWidget />
//       <WorldMap />
//     </div>

  );

};

export default WorldPage;

