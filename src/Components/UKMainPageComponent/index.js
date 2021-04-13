import React, { useState, useEffect } from "react";
import css from "./UKPage.module.css";
import UKRestrictionsDisplay from "../UkRestrictionsDisplay";
import HotelWidget from "../Hotel Widget Component";
import axios from "axios";
import UkGovApiDisplay from "../UKGov API Component";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Options from "./optionsData"

function UKPage() {
  const [results, setResults] = useState([]);
  const [resultsPrev, setResultsPrev] = useState([]);
  const [selectRange, setSelectRange] = useState([]);
  const [areaCode, setAreaCode] = useState('K02000001');
  const [areaType, setAreaType] = useState('overview');
  const [search, setSearch] = useState(181);


  let DATE = new Date(); // Displays today 
  DATE.setDate(DATE.getDate()-1) // minus one day - gives us yesterday 
  let yesterday = (DATE.toISOString().substr(0, 10)) //converts yesterdays date into correct format yyyy-mm-dd

  let ResultsURL = `https://api.coronavirus.data.gov.uk/v2/data?areaType=${areaType}&areaCode=${areaCode}&metric=cumCasesByPublishDate&metric=newCasesByPublishDateRollingRate&metric=newCasesByPublishDateRollingSum&metric=cumCasesByPublishDateRate&format=json&release=${yesterday}`

  useEffect(() => {
    axios
      .all([axios.get(ResultsURL)])
      .then((responseArr) => {
        setResults((responseArr[0].data.body)[0]); //todays results (first in the array is most recent date)
        setResultsPrev((responseArr[0].data.body)[28]); // results from 28 days ago 
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search, ResultsURL]);


  useEffect(() => {
    let optionsArray = [];
    Options.forEach((value, i) => {
      optionsArray[i] = {
        County: value.areaName,
        areaCode: value.areaCode,
        type:   value.areaType,
        number: i,
        group:  (value.areaType === "ltla") ? "District Council" : (value.areaType === "utla") ? "County Council": value.areaType
      };
      return optionsArray;
    });
    setSelectRange(optionsArray);
  }, []);

  function handleSearch(value) {
    setAreaCode(value !== null ? value.areaCode : "K02000001")
    setAreaType(value !== null ? value.type : "overview") 
    setSearch(value === null ? 0 : value.number);
  }

  return (
    <div className={css.container}>
      <div className={css.columnone}>
        <div className={css.title}>
          <h1>Regional Stats</h1>
          <p>Search for a County, Nation, Region, Town or City</p>
        </div>

        <div className={css.content}>
          <Autocomplete
            getOptionSelected={(option, value) => option.areaCode === value.areaCode}
            id="combo-box-demo"
            options={selectRange}
            getOptionLabel={(option) => option.County}
            groupBy={(option) => option.group}
            style={{ width: 400 }}
            onChange={(event, value) =>
              handleSearch(value)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Area Search"
                variant="outlined"
                placeholder="Search an Area"
              />
            )}
          />
        </div>

        <div>
          <UkGovApiDisplay data={results} data2={resultsPrev} />
        </div>
       

      </div>

      <div className={css.columntwo}>
        <div className={css.WebScrapeInfo}>
          <UKRestrictionsDisplay />
        </div>
        <div className={css.HotelWidget}>
          <HotelWidget />
        </div>
        
        {/* Select is populated using lines 42 - 45 which is referencing the county array, pulled from API */}
      </div>
    </div>
  );
}
export default UKPage;
