import React from 'react';
import css from './govApi.module.css'
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
} from "@chakra-ui/react"



function UkGovApiDisplay({data, data2, search=0}) {
let color = "blue"
let covidRate = data[search]?.Rate.PublishDate;
let covidRatePrev = data2[search]?.Rate.PublishDate ? data2[search]?.Rate.PublishDate : covidRate-500
let covidChange = ((covidRate / covidRatePrev -1)*100).toFixed(2)


   if (covidRate>5000 && covidRate<8000){
        color="orange"
   }
   else if (covidRate>=8000){
    color="red"
} else if (covidRate<=5000){
    color="blue"}
  
    let colorRate = (covidRatePrev >= 0) ? "green" : "red";
   
    // console.log(data)
  return (
   <div className={css.govText}>
     <p>Cumulative Cases: {data[search]?.cases.cumulative ? data[search]?.cases.cumulative : "No Data for this Area"}</p>
     <div className={css.stats}>
     <p style={{color:color}}>Rate Today: <br/> {covidRate}</p>
     <p style={{color:color}}>Rate Last Month: <br/> {covidRatePrev}</p>
     <div className={css.key}>
     <Popover >
  <PopoverTrigger>
    <Button colorScheme="facebook">Key</Button>
  </PopoverTrigger>
  <PopoverContent  color="black">
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Covid Rates</PopoverHeader>
    <PopoverBody>
      Covid Rate is the number of current cases per 100,000 of the area's population.<br/>
      <span style={{color:"blue"}}>Low = 5000 and below</span> <br/>
      <span style={{color:"orange"}}>Medium = 5001 to 8000</span> <br/>
      <span style={{color:"red"}}> High = 8001 and Over</span>

      </PopoverBody>
  </PopoverContent>
</Popover>

     {/* <p><span style={{color:"blue"}}>Low  </span><span style={{color:"orange"}}>Medium </span><span style={{color:"red"}}>High</span></p> */}
     </div>
     </div>
     <p style={{color:colorRate}}>Rate Change {`${covidChange}%`}</p>
     <p>Last Updated on: {data[search]?.date}</p>
     {/* <h2>{data[search]?.areaName}</h2> */}

   </div>
  );
}


export default UkGovApiDisplay;
