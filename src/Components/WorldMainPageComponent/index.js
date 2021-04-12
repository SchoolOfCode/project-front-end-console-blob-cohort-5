import React, { useState } from "react";
import css from "./WorldPage.module.css";
import TravelRestrictionsDisplay from "../TravelRestrictionsDisplayComponent";
import FlightWidget from "../Fligh Widget Component";
import useFetch from "../../CustomHooks/useFetch";
import MyMap from "../World Map Component/index.js";
import CountrySelect from "../CountrySelect/CountrySelect";
import Alert from "../Alert";

import TransitionExample from "../Alert";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function WorldPage() {
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


  const classes = useStyles();


  let DATE = new Date();
  DATE.setUTCDate(DATE.getUTCDate()-9)
  // console.log(DATE)

  const [date, setDate] = useState(DATE.toISOString().substr(0, 10));

  // const [capital, setCapital] = useState("London");
  let API_WORLD_STATS = `https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/actions`;

  let DATE2 = new Date();
  DATE2.setMonth(DATE2.getMonth() - 1); //minus mmonth from secodn instance of new date()
  // console.log(DATE2.toISOString().substr(0, 10)); //convert back date to readable string


  const [countryCode, setCountryCode] = useState("GBR");
  //WHILE countryObj array less than 2 keep fetching
  
  let  countryObj = useFetch(`${API_WORLD_STATS}/${countryCode}/${date}`, 
  [
    countryCode,
    date,
  ]);
  
  const countryObj2 = useFetch(`${API_WORLD_STATS}/${countryCode}/${DATE2.toISOString().substr(0, 10)}`, [
    countryCode,
  ]);

  // handle change on search bar 
  function handleChange(value) { 
    setCountryCode((value === null) ? "GBR" : value.ISO3 );
    // setCapital(value.Capital)
    // console.log(value["Country Name"])
  }

// handle map country change
  function handleCountryChange(value){
    setCountryCode((value === null) ? "GBR" : value.sourceTarget.feature.properties.ISO_A3 );
    // console.log(value.sourceTarget.feature.properties.ADMIN)

  }
  
  function handleDate(e) {
    // console.log(e.target.value)
    setDate(e.target.value);
  }

  let today = new Date().toISOString().substr(0, 10);

  return (
    <><Alert/>
    <h1 className={css.title}>World Wide Stats & Travel Information</h1>
      <div className={css.container}>
        {/* <SearchBar />
    <TravelRestrictionsDisplay /> */}


        <div className={css.columnone}>
      

         <div className={css.twoColumns}>
            <CountrySelect handleChange={handleChange} />

            
        {/* <input
            id="date"
            type={"date"}
            min="2020-01-01"
            max={today}
            onChange={handleDate}
          ></input> */}

            <form className={classes.container} noValidate>
  <TextField
    id="date"
    label="Change Date"
    type="date"
    defaultValue={DATE.toISOString().substr(0, 10)}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    onChangeCapture={handleDate}
  />
</form>

      </div>

          <div className={css.TravelRestrictionsDisplay}>
            <TravelRestrictionsDisplay
              data={countryObj}
              data2={countryObj2}
              color={"#FDFFB6"}
              // capital={capital}
            />
          </div>
        </div>

        <div className={css.columntwo}>
        <div className={css.map}><MyMap handleCountryChange={handleCountryChange} /></div>
          
          <div className={css.flightWidget}>
            <FlightWidget  />
          </div>
         
        </div>
      </div>
    </>
  );
}

export default WorldPage;
