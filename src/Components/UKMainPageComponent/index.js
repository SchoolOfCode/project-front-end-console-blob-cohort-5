import React, { useState, useEffect } from "react";
import css from "./UKPage.module.css";
import UKRestrictionsDisplay from "../UkRestrictionsDisplay";
import HotelWidget from "../Hotel Widget Component";
import axios from "axios";
import UkGovApiDisplay from "../UKGov API Component";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function UKPage() {
  const [results, setResults] = useState([]);
  const [resultsPrev, setResultsPrev] = useState([]);
  const [search, setSearch] = useState(0);
  const [selectRange, setSelectRange] = useState([]);

  let DATE = new Date().toISOString().substr(0, 10); // can we have this display yesterday at all times
  let DATE2 = new Date();
  DATE2.setMonth(DATE2.getMonth() - 1); //minus mmonth from secodn instance of new date()
  console.log(DATE2.toISOString().substr(0, 10)); //convert back date to readable string
  let URL = `https://api.coronavirus.data.gov.uk//v1/data?filters=date=2021-04-05&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","areaType":"areaType","cases":{"daily":"newCasesByPublishDate","cumulative":"cumCasesByPublishDate"},"deaths":{"daily":"newDeathsByDeathDate","cumulative":"cumDeathsByDeathDate"},"Rate":{"PublishDate":"cumCasesByPublishDateRate"}}`;
  let URL2 = `https://api.coronavirus.data.gov.uk//v1/data?filters=date=${DATE2.toISOString().substr(0,10)}&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","areaType":"areaType","case s":{"daily":"newCasesByPublishDate","cumulative":"cumCasesByPublishDate"},"deaths":{"daily":"newDeathsByDeathDate","cumulative":"cumDeathsByDeathDate"},"Rate":{"PublishDate":"cumCasesByPublishDateRate"}}`;

  useEffect(() => {
    axios
      .all([axios.get(URL), axios.get(URL2)])
      .then((responseArr) => {
        setResults(responseArr[0].data.data);
        setResultsPrev(responseArr[1].data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  let countryArray = [];
  useEffect(() => {
    results.forEach((value, i) => {
      countryArray[i] = {
        County: value.areaName,
        number: i,
        group: (value.areaType === "ltla") ? "District Council" : (value.areaType === "utla") ? "County Council": value.areaType
      };
      // console.log(countryArray)
      // setSelectRange(countryArray)
      return countryArray;
    });
    setSelectRange(countryArray);
  }, [results]);

  function handleSearch(num) {
    setSearch(num);
    // setSearch(inputValue)
  }

  let dataUK = {
    country: "England",
    covidHeadline: "Stay at Home",
    quarantineRestrictions: "Don't go out, or 14 day quarantine",
  };

  return (
    <div className={css.container}>
      <div className={css.columnone}>
        <div className={css.title}>
          {/* this is the API */}
          <h1>Regional Stats</h1>

          <p>Search for a County, Nation, Region, Town or City</p>
        </div>

        <div className={css.content}>
          <Autocomplete
            id="combo-box-demo"
            options={selectRange}
            getOptionLabel={(option) => option.County}
            groupBy={(option) => option.group}
            style={{ width: 300 }}
            onChange={(event, value) =>
              handleSearch(value === null ? 0 : value.number)
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
          <UkGovApiDisplay data={results} data2={resultsPrev} search={search} />
        </div>
      </div>

      <div className={css.columntwo}>
        <div className={css.WebScrapeInfo}>
          <UKRestrictionsDisplay data={dataUK} />
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
