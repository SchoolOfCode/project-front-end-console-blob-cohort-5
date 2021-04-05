import React, { useState, useEffect} from "react";
import css from "./UKPage.module.css";
import SearchBar from "../SearchComponent/index.js";
import UKMap from "../UKMapComponent";
import UKRestrictionsDisplay from "../UkRestrictionsDisplay";
import HotelWidget from "../Hotel Widget Component";
import axios from "axios";
import UkGovApiDisplay from "../UKGov API Component";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


function UKPage() {
  const [results, setResults] = useState([]);
  const [resultsPrev, setResultsPrev] = useState([]) 
  const [search, setSearch] = useState(0)
  const [selectRange, setSelectRange] = useState([]) 

  
  
  let DATE = new Date().toISOString().substr(0, 10); // can we have this display yesterday at all times 
  let DATE2 = new Date()
  DATE2.setMonth(DATE2.getMonth()-1) //minus mmonth from secodn instance of new date()
  console.log(DATE2.toISOString().substr(0, 10)) //convert back date to readable string
  let URL = `https://api.coronavirus.data.gov.uk//v1/data?filters=date=${DATE}&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","areaType":"areaType","cases":{"daily":"newCasesByPublishDate","cumulative":"cumCasesByPublishDate"},"deaths":{"daily":"newDeathsByDeathDate","cumulative":"cumDeathsByDeathDate"},"Rate":{"PublishDate":"cumCasesByPublishDateRate"}}`
  let URL2 = `https://api.coronavirus.data.gov.uk//v1/data?filters=date=${DATE2.toISOString().substr(0, 10)}&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","areaType":"areaType","cases":{"daily":"newCasesByPublishDate","cumulative":"cumCasesByPublishDate"},"deaths":{"daily":"newDeathsByDeathDate","cumulative":"cumDeathsByDeathDate"},"Rate":{"PublishDate":"cumCasesByPublishDateRate"}}`

  useEffect(() => {
    axios
      .all([
        axios.get(URL),
        axios.get(URL2)
      ])
      .then(responseArr => {
        setResults(responseArr[0].data.data);
        setResultsPrev(responseArr[1].data.data)
        console.log(responseArr[0].data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [search]);


  let countryArray=[]
  useEffect(() => {
    results.forEach((value,i)=>{
        countryArray[i] = {"County":value.areaName, "number":i, "group":value.areaType}
        // console.log(countryArray)
        // setSelectRange(countryArray)
        return countryArray
    })
    setSelectRange(countryArray) 
    console.log(countryArray)
}, [results])

function handleSearch(num){
  console.log(num)
  
  setSearch(num)
  // setSearch(inputValue)
}


  let dataUK = {
    country: "England",
    covidHeadline: "Stay at Home",
    quarantineRestrictions: "Don't go out, or 14 day quarantine",
  };

  return (

    <div className={css.UKpage}>
      
      <div className={css.flexcontainer}>

      
      <div className={css.flexLeft}>


        <div className={css.UKGovDisplay}>
          {/* this is the API */}
          <h1>Regional stats</h1>

          <p>Search for a County, Nation, Region, Town or City</p>
          </div>

{/* Select is populated using lines 42 - 45 which is referencing the county array, pulled from API */}

          <div >
          <Autocomplete
      id="combo-box-demo"
      options={selectRange}
      getOptionLabel={(option) => option.County}
      
      groupBy={(option) => (option.group)}
      style={{ width: 300 }}
      onChange={(event,value) => handleSearch((value === null) ? 0 : value.number )}
      renderInput={(params) => <TextField {...params} label="Area Search" variant="outlined" placeholder="Search an Area" />}
    />
          </div>
          <UkGovApiDisplay data={results} data2={resultsPrev} search={search}/>

        </div>
        
      </div>
        <div className={css.flexRight}>
          {/* <div className={css.UKMap}>
            <UKMap width="25%" />
          </div> */}
          <div className={css.WebScrapeInfo}>
          <UKRestrictionsDisplay data={dataUK}/>
      
        </div>
          <div className={css.HotelWidget}>
              <HotelWidget />
            </div>


        </div>
    </div>
    
  );

}
export default UKPage;
