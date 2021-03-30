
import React from 'react';
import css from './WorldPage.module.css';
import cn from 'classnames';
import SearchBar from '../SearchComponent/index.js';
import TravelRestrictionsDisplay from '../TravelRestrictionsDisplayComponent';


// // const BACKEND_URL = "http://localhost:5000";



function WorldPage () {

return(
    <div>
    {/* <SearchBar />
    <TravelRestrictionsDisplay /> */}
    <h1>World Page</h1>
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
//   );
// }

// export default WorldPage;
