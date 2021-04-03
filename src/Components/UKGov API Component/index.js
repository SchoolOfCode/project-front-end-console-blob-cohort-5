import React from 'react';
import css from './govApi.module.css';
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

import increase from "./increase.png";
import decrease from "./decrease.png";



function UkGovApiDisplay({data, data2, search=0}) {
let color = "blue"
let covidRate = data[search]?.Rate.PublishDate;
let covidRatePrev = data2[search]?.Rate.PublishDate ? data2[search]?.Rate.PublishDate : (covidRate-300).toFixed(1)
let covidChange = ((covidRate / covidRatePrev -1)*100).toFixed(2)
let covidChangeSign = (covidRate>= 0 ? increase : decrease )


   if (covidRate>5000 && covidRate<8000){
        color="orange"
   }
   else if (covidRate>=8000){
    color="red"
} else if (covidRate<=5000){
    color="blue"}
  
    let colorRate = (covidRatePrev >= 0) ? "red" : "green";
   
    // console.log(data)
  return (
   <div className={css.govText}>
     <p>Cumulative Cases: {data[search]?.cases.cumulative ? data[search]?.cases.cumulative : "No Data for this Area"}</p>
     <div className={css.stats}>
     <div className={css[color]}>
       <p style={{color:'white'}}>Rate Last Month: {covidRatePrev}</p>
       </div>
     <div className={css[color]}>
       <p style={{color:'white'}}>Rate Today: {covidRate}</p>
       </div>
     <div className={css.key}>
     <Popover width="40%">
  <PopoverTrigger>
    <div className={css.keyButton}>???</div>
  </PopoverTrigger>
  <PopoverContent  bg="white" color="black" border="1px solid black" padding="20px" borderRadius="25px">
    <PopoverArrow />
    <PopoverCloseButton bg="rgb(59, 182, 155)" borderRadius="25px" width="30px"/>
    <PopoverHeader><h2>Covid Rates...</h2></PopoverHeader>
    <PopoverBody >
      Covid Rate is the number of current cases per 100,000 of the area's population.<br/>
      <span style={{color:"blue", textAlign:"center"}}>Low = 5000 and below</span> <br/>
      <span style={{color:"orange"}}>Medium = 5001 to 8000</span> <br/>
      <span style={{color:"red"}}> High = 8001 and Over</span><br/> <br/>
      <div>{`${data[search]?.areaName} Currently has a Rate of...   `}<span style={{color:color}}>{covidRate}</span> per 100,000 people</div>

      </PopoverBody>
  </PopoverContent>
</Popover>

     {/* <p><span style={{color:"blue"}}>Low  </span><span style={{color:"orange"}}>Medium </span><span style={{color:"red"}}>High</span></p> */}
     </div>
     </div>
     <p style={{color:colorRate}}>Rate Change since last Month:  {`${covidChange}%`}    <img src={covidChangeSign}></img></p>
     <p>Last Updated on: {data[search]?.date}</p>
     {/* <h2>{data[search]?.areaName}</h2> */}

   </div>
  );
}


export default UkGovApiDisplay;
