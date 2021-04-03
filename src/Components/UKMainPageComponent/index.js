import React, { useState, useEffect} from "react";
import css from "./UKPage.module.css";
import SearchBar from "../SearchComponent/index.js";
import UKMap from "../UKMapComponent";
import UKRestrictionsDisplay from "../UkRestrictionsDisplay";
import HotelWidget from "../Hotel Widget Component";
import axios from "axios";
import UkGovApiDisplay from "../UKGov API Component";

function UKPage() {
  const [results, setResults] = useState([]);
  const [searchCountry, setSearchCountry] = useState("") 
  const [search, setSearch] = useState(0)
  
  
  let DATE = new Date().toISOString().substr(0, 10); // can we have this display yesterday at all times 

  let URL = `https://api.coronavirus.data.gov.uk//v1/data?filters=date=2021-04-01&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","areaType":"areaType","cases":{"daily":"newCasesByPublishDate","cumulative":"cumCasesByPublishDate"},"deaths":{"daily":"newDeathsByDeathDate","cumulative":"cumDeathsByDeathDate"},"Rate":{"PublishDate":"cumCasesByPublishDateRate"}}`

  useEffect(() => {
    axios
      .all([
        axios.get(URL),
      ])
      .then(responseArr => {
        setResults(responseArr[0].data.data);
        console.log(responseArr[0].data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  let countryArray=[]
useEffect(() => {
    results.forEach((value,i)=>{
        countryArray[i] = value.areaName
        return countryArray
    })
    
let select = document.getElementById( 'counties' );
countryArray.forEach((value, i)=> {
  console.log(`${value} and ${i} `)
select.add( new Option( value, i ) );

});
    
}, [results])

function handleSearch(e){
  console.log(e)
  console.log(e.target)
  setSearch(e.target.value)
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
          <div className={css.WebScrapeInfo}>
          <UKRestrictionsDisplay data={dataUK}/>
          </div>
      
        {/* </div> */}
        <div className={css.UKRestrictionsDisplay}>
          {/* this is the API */}</div>
          <div>
          <h2>Regional stats</h2>
          <p>Search for a County, Nation, Region, Town or City</p>
          </div>

{/* Select is populated using lines 42 - 45 which is referencing the county array, pulled from API */}
          <select id="counties" onChange={handleSearch} ></select>
          <div><UkGovApiDisplay data={results} search={search}/></div>

        

      </div>
        <div className={css.columntwo}>
          <div className={css.map}>
            <UKMap width="25%" />
          </div>
          <div className={css.Widget}>
            <HotelWidget />
          </div>
        </div>
    </div>
    
  );

}
export default UKPage;
