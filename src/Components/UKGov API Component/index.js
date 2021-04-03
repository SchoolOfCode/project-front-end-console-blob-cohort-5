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
  GridItem,
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
    <>
   <div className={css.govText}>
     <div className={css.rowOne}><h4>Cumulative Cases: {data[search]?.cases.cumulative ? data[search]?.cases.cumulative : "No Data for this Area"}</h4>
  
                    {/* <p><span style={{color:"blue"}}>Low  </span><span style={{color:"orange"}}>Medium </span><span style={{color:"red"}}>High</span></p> */}
                  </div>

       <div className={css.rowTwo}> 
       <h2>Covid Rates:</h2>
       <div className={css.popoverButton}>
                    <Popover width="40%">
                  <PopoverTrigger>
                    <div className={css.keyButton} style={{fontWeight:"bolder"}}>?</div>
                  </PopoverTrigger>
                  <PopoverContent  bg="white" border="1px solid black" padding="20px"  boxShadow="5px 10px #888888" borderRadius="25px">
                    <PopoverArrow />
                    <PopoverCloseButton bg="rgb(59, 182, 155)" borderRadius="25px" width="30px"/>
                    <PopoverHeader><h2>Covid Rates Key:</h2></PopoverHeader>
                    <PopoverBody >
                      Covid Rate is the number of current cases per 100,000 of the area's population.<br/> <br/>
                      <ul>
                        <li><span style={{color:"rgb(59, 112, 182)"}}>Low = 5000 and below</span></li> <br/>
                      <li><span style={{color:"rgb(192, 147, 63)"}}>Medium = 5001 to 8000</span></li> <br/>
                     <li><span style={{color:" rgb(206, 95, 95)"}}> High = 8001 and Over</span></li> <br/> 
                      <div style={{fontWeight:'bold'}}><span style={{textDecoration:"underline"
}}>{data[search]?.areaName}</span>  currently has a Rate of...   <span style={{color:color}}>{covidRate}</span> per 100,000 people</div>
                      </ul>
                      </PopoverBody>
                  </PopoverContent>
                </Popover>
                </div>
                </div>


     <div className={css.stats}>
            <div className={css[color]}>
                <p style={{color:'white'}}>Last Month: {covidRatePrev}</p>
              </div>
     
            <div className={css[color]}>
                <p style={{color:'white'}}>Today: {covidRate}</p>
              </div>
     
           
     </div>
   </div>
     <div className={css[colorRate]}>
              <p style={{color:'white'}}>Change since last Month:  {`${covidChange}%`}    <img src={covidChangeSign}></img></p>
              </div>

     <div className={css.update}>Last Updated on: {data[search]?.date}</div>
     {/* <h2>{data[search]?.areaName}</h2> */}
   </>
  );
}


export default UkGovApiDisplay;
