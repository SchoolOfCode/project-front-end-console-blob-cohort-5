import React, { useState } from "react";
import css from "./WorldPage.module.css";
import TravelRestrictionsDisplay from "../TravelRestrictionsDisplayComponent";
import FlightWidget from "../Fligh Widget Component";
import useFetch from "../../CustomHooks/useFetch";
import MyMap from "../World Map Component/index.js";
import CountrySelect from "../CountrySelect/CountrySelect";

function WorldPage() {
  const [date, setDate] = useState("2021-03-28");
  const [capital, setCapital] = useState("London");
  let API_WORLD_STATS = `https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/actions`;

  let date2 = `2021-03-01`;

  const [countryCode, setCountryCode] = useState("GBR");
  //WHILE countryObj array less than 2 keep fetching
  
  let  countryObj = useFetch(`${API_WORLD_STATS}/${countryCode}/${date}`, 
  [
    countryCode,
    date,
  ]);
  
  const countryObj2 = useFetch(`${API_WORLD_STATS}/${countryCode}/${date2}`, [
    countryCode,
  ]);

  function handleChange(value) {
    setCountryCode((value === null) ? "GBR" : value.ISO3 );
    setCapital(value.Capital)
  }
  
  function handleDate(e) {
    setDate(e.target.value);
  }

  let today = new Date().toISOString().substr(0, 10);

  return (
    <>
      <div className={css.container}>
        {/* <SearchBar />
    <TravelRestrictionsDisplay /> */}

        <div className={css.columnone}>

         
            <CountrySelect handleChange={handleChange} />
          <input
            id="date"
            type={"date"}
            min="2020-01-01"
            max={today}
            onChange={handleDate}
          ></input>
      

          <div className={css.TravelRestrictionsDisplay}>
            <TravelRestrictionsDisplay
              data={countryObj}
              data2={countryObj2}
              color={"#FDFFB6"}
              capital={capital}
            />
          </div>
        </div>

        <div className={css.columntwo}>
        <div className={css.map}><MyMap handleCountryChange={setCountryCode} /></div>
          
          <div className={css.flightWidget}>
            <FlightWidget  />
          </div>
        </div>
      </div>
    </>
  );
}

export default WorldPage;
