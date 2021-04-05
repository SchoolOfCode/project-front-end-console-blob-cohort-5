import React, {useState} from 'react';
import cn from 'classnames';
import css from './travelRestrictDisplay.module.css';
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

function TravelRestrictionsDisplay({data, data2, color, capital}) {
console.log(data)

function formatNumber(num = 100) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}



  if(data?.policyActions && data.stringencyData.country_code != undefined && data.policyActions.length > 1 && data2?.policyActions && data2.stringencyData.country_code != undefined && data2.policyActions.length > 1 ){

let stringencyChange = data2.stringencyData.stringency-data.stringencyData.stringency;
let stringencyWording = (data2.stringencyData.stringency-data.stringencyData.stringency > 0) ? "tightening" : "loosening";

    return (
      <div data-testid="travelrestrictions">
        <div className={cn(css[color])}>

          <h5>Capital: {capital}</h5>

      <p>{`Border Status: ${data.policyActions[7].policy_value_display_field} - Code(${data.policyActions[7].policyvalue})`}
      <Popover>
                  <PopoverTrigger>
                    <button>Border Key</button>
                  </PopoverTrigger>
                  <PopoverContent  bg="white" border="1px solid black" padding="20px" width="50vh" boxShadow="5px 5px #888888" borderRadius="15px">
                    <PopoverArrow />
                    <PopoverCloseButton bg="rgb(59, 182, 155)" borderRadius="10px" width="30px"/>
                    <PopoverHeader><h2>Border Key</h2></PopoverHeader>
                    <PopoverBody >
                     SOME explanation about what the border codes mean 
                     <p>0 - No measures 1 - Screening 2 - Quarantine arrivals from high-risk regions 3 - Ban on arrivals from some regions 4 – Ban on all regions or total border closure</p>

                      </PopoverBody>
                  </PopoverContent>
                </Popover>
</p>

      <p>{` WorkPlace Status: ${data.policyActions[0].policy_value_display_field} - Code: (${data.policyActions[0].policyvalue})`}
      <Popover>
                  <PopoverTrigger>
                    <button>Workplace Status Key</button>
                  </PopoverTrigger>
                  <PopoverContent  bg="white" border="1px solid black" padding="20px" width="50vh" boxShadow="5px 5px #888888" borderRadius="15px">
                    <PopoverArrow />
                    <PopoverCloseButton bg="rgb(59, 182, 155)" borderRadius="10px" width="30px"/>
                    <PopoverHeader><h2>WorkPlace Status Key</h2></PopoverHeader>
                    <PopoverBody >
                     SOME explanation about what the border codes mean 
                     <p>0 - No measures 1 - recommend closing (or work from home) 2 - require closing (or work from home) for some sectors or categories of workers 3 - require closing (or work from home) all-but-essential workplaces (e.g. grocery stores, doctors) No data - blank</p>
                      </PopoverBody>
                  </PopoverContent>
                </Popover></p>
      
<br/>
      <h3 className={css.headerthree}>What about FaceMasks?</h3>
        <p>{data.policyActions[17].policy_value_display_field}</p>


      <h3 className={css.headerthree}>Public Events</h3>
      <p>{data.policyActions[3].policy_value_display_field}</p>

      <h3 className={css.headerthree}className={css.headerthree}>Stringency Index</h3>
      <p>{data.stringencyData.stringency}
      
      <Popover>
                  <PopoverTrigger>
                    <button>Stringency?</button>
                  </PopoverTrigger>
                  <PopoverContent  bg="white" border="1px solid black" padding="20px"  width="50vh" boxShadow="5px 5px #888888" borderRadius="15px">
                    <PopoverArrow />
                    <PopoverCloseButton bg="rgb(59, 182, 155)" borderRadius="10px" width="30px"/>
                    <PopoverHeader><h2>Stringency Index Explained</h2></PopoverHeader>
                    <PopoverBody >
                    Stringency Index 100 = strict and 0 = very lax
                      </PopoverBody>
                  </PopoverContent>
                </Popover></p>


      <p><h3 className={css.headerthree}>Covid Cases:</h3>{formatNumber(data.stringencyData.confirmed)}</p>
</div>

<div className={css.blueBox}>
<h4>Comparison to Start of the Month:</h4>
      <p>{`Stringency Index: ${data2.stringencyData.stringency} this is a change of ${((stringencyChange).toFixed(2) > 0 ) ? `+${(stringencyChange).toFixed(2)}` : (stringencyChange).toFixed(2) }`}</p>
      <p>{`This means that the country is ${stringencyWording} their Covid restrictions internally`}</p>
      <p><h4>Covid Cases:</h4>{formatNumber(data2.stringencyData.confirmed)}</p>
</div>



      </div>
    )

  }

  return (
    <div data-testid="travelrestrictions" className={css.container}>
    <h1>There is no data for this date, try an older date please...</h1>
    </div>
  )
}

export default TravelRestrictionsDisplay;







