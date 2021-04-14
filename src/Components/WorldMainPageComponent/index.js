import React, { useState, lazy, Suspense } from "react";
import css from "./WorldPage.module.css";
import TravelRestrictionsDisplay from "../TravelRestrictionsDisplayComponent";
import FlightWidget from "../Flight Widget Component";
import useFetch from "../../CustomHooks/useFetch";
// import MyMap from "../World Map Component/index.js";
import CountrySelect from "../CountrySelect/CountrySelect";
import Alert from "../Alert";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import RedCountriesModal from "../Modal Component/index";
import { Button } from "react-bootstrap";

function WorldPage() {
  const [modalShow, setModalShow] = React.useState(false);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();

  let DATE = new Date();
  DATE.setUTCDate(DATE.getUTCDate() - 9);
  // console.log(DATE)

  const [date, setDate] = useState(DATE.toISOString().substr(0, 10));

  // const [capital, setCapital] = useState("London");
  let API_WORLD_STATS = `https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/actions`;

  let DATE2 = new Date();
  DATE2.setMonth(DATE2.getMonth() - 1); //minus mmonth from secodn instance of new date()
  // console.log(DATE2.toISOString().substr(0, 10)); //convert back date to readable string

  const [countryCode, setCountryCode] = useState("GBR");

  
  let  countryObj = useFetch(`${API_WORLD_STATS}/${countryCode}/${date}`, 
  [

    countryCode,
    date,
  ]);

  
  
  // handle change on search bar 
  function handleChange(value) { 
    setCountryCode((value === null) ? "GBR" : value.ISO3 );
  }
  
  // handle map country change
  function handleCountryChange(value){
    setCountryCode((value === null) ? "GBR" : value.sourceTarget.feature.properties.ISO_A3 );
    
  }
  
  function handleDate(e) {
    setDate(e.target.value);
  }
  
  //lazy loading of the Map
  const LazyMyMap = lazy(()=>import('../World Map Component/index.js'));
  
  return (
    <>
      <Alert />
      
      <div className={css.container}>
        {/* <SearchBar />
    <TravelRestrictionsDisplay /> */}

        <div className={css.columnone}>
        <h1 className={css.title}>World Wide Stats & Travel Information</h1>
          
          <div className={css.twoColumns}>
            <CountrySelect handleChange={handleChange} />


            

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
            />
          </div>
        </div>

        <div className={css.columntwo}>
        <div className={css.redcountries}>
            <div className={css.redone}>
              <h3>Important Notice</h3>
              <p>  
                A <b>traffic light system</b>, which will categorise countries based on
                risk alongside the restrictions required for travel was set out on <b>9th April 2021</b>.
              </p>
             
            </div>
            <div className={css.redtwo}>
              <Button
                className={css.redcountriesbutton}
                variant="primary"
                size="sm"
                onClick={() => setModalShow(true)}
              >
                See 'red-list' countries
              </Button>
            </div>
          </div>
          <RedCountriesModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <div className={css.map}>
          <Suspense fallback={<div className={css.mapLoading}>Loading...</div>}>
            <LazyMyMap handleCountryChange={handleCountryChange} />
          </Suspense>
          </div>

          <div className={css.flightWidget}>
            <FlightWidget />
          </div>
        </div>
      </div>
    </>
  );
}

export default WorldPage;
