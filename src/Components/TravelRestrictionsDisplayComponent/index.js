// import React from 'react';
// import css from './travelRestrictDisplay.module.css';
// import cn from 'classnames'

// function TravelRestrictionsDisplay({ countryCode, color, size, imgSize }) {


// const [countryData, setCountryData]= useState(""); 

// let BACKEND_URL = `https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/actions`

// useEffect(() => {
//   async function fetchCountryData(countryCode) {
//     let response = await fetch(`${BACKEND_URL}/POL/2021-03-26`);
//     let data = await response.json();
//     setCountryData(data);
//     console.log(data);

//     fetchCountryData(countryCode)
//   }
// }, [countryCode])



//   return (
//     <div className={cn(css[color], css[size])}>
//       <h1>{data.countryName}</h1>
//       <p>{data.entryRestrictions}</p>
//       <p>{data.quarantineRestirctions}</p>
//       <img className={cn(css[imgSize])} src={data.imgSrc} alt="Country Flag" />
//     </div>
//   );
// }



// export default TravelRestrictionsDisplay;
