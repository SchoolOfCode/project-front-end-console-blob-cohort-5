import React, { useState } from "react";
import cn from "classnames";
import css from "./travelRestrictDisplay.module.css";
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

function TravelRestrictionsDisplay({ data, data2, color, capital }) {
  console.log(data);

  function formatNumber(num = 100) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  if (
    data?.policyActions &&
    data.stringencyData.country_code != undefined &&
    data.policyActions.length > 1 &&
    data2?.policyActions &&
    data2.stringencyData.country_code != undefined &&
    data2.policyActions.length > 1
  ) {
    let stringencyChange =
      data2.stringencyData.stringency - data.stringencyData.stringency;
    let stringencyWording =
      data2.stringencyData.stringency - data.stringencyData.stringency > 0
        ? "tightening"
        : "loosening";

    return (
      <div data-testid="travelrestrictions">
        <div className={cn(css[color])}>
          {/* <h5>Capital: {capital}</h5> */}

          <div className={css.twoColumns}>
            <p>
              <div className={css.keyColumns}><h3 className={css.headerthree}>
                Border status</h3>
                <Popover>
                  <PopoverTrigger>
                    <button className={css.buttonone}>Key</button>
                  </PopoverTrigger>
                  <PopoverContent
                    bg="white"
                    border="1px solid black"
                    padding="15px"
                    width="50vh"
                    boxShadow="5px 5px #888888"
                    borderRadius="15px"
                  >
                    <PopoverArrow />
                    <PopoverCloseButton
                      bg="rgb(59, 182, 155)"
                      borderRadius="10px"
                      width="30px"
                    />
                    <PopoverHeader>
                      <h2>Border Key</h2>
                    </PopoverHeader>
                    <PopoverBody>
                      An explanation about what the border codes mean...
                      <p>
                        0 - No measures <br /> 1 - Screening <br />2 -
                        Quarantine arrivals from high-risk regions <br />3 - Ban
                        on arrivals from some regions <br />4 – Ban on all
                        regions or total border closure
                      </p>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                </div>
              {`(${data.policyActions[7].policyvalue}) - ${data.policyActions[7].policy_value_display_field}`}
            </p>
            <p>
              <h3 className={css.headerthree}>Covid cases:</h3>
              {formatNumber(data.stringencyData.confirmed)}
            </p>
          </div>
         
         
         
          <div className={css.twoColumns}>
          <p>
          <div className={css.keyColumns}>
            <h3 className={css.headerthree}>
              Workplace status</h3>
              <Popover>
                <PopoverTrigger>
                  <button className={css.buttontwo}>Key</button>
                </PopoverTrigger>
                <PopoverContent
                  bg="white"
                  border="1px solid black"
                  padding="20px"
                  width="50vh"
                  boxShadow="5px 5px #888888"
                  borderRadius="15px"
                >
                  <PopoverArrow />
                  <PopoverCloseButton
                    bg="rgb(59, 182, 155)"
                    borderRadius="10px"
                    width="30px"
                  />
                  <PopoverHeader>
                    <h2>WorkPlace Status Key</h2>
                  </PopoverHeader>
                  <PopoverBody>
                    An explanation of the status codes for wrokplace
                    restrictions...
                    <p>
                      0 - No measures
                      <br /> 1 - recommend closing (or work from home) <br />2 -
                      require closing (or work from home) for some sectors or
                      categories of workers <br />3 - require closing (or work
                      from home) all-but-essential workplaces (e.g. grocery
                      stores, doctors) No data - blank
                    </p>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
</div>
          
            {`(${data.policyActions[0].policyvalue}) - ${data.policyActions[0].policy_value_display_field}`}
          </p>

          <p>
                <h3 className={css.headerthree}>What about facemasks?</h3>
                {data.policyActions[17].policy_value_display_field}
              </p>
</div>
          <br />
          <div className={css.twoColumns}>
            <div>
            <div className={css.keyColumns}>
              <h3 className={css.headerthree} className={css.headerthree}>
                Stringency index</h3>
                <Popover>
                  <PopoverTrigger>
                    <button className={css.buttonthree}>Key</button>
                  </PopoverTrigger>
                  <PopoverContent
                    bg="white"
                    border="1px solid black"
                    padding="20px"
                    width="50vh"
                    boxShadow="5px 5px #888888"
                    borderRadius="15px"
                  >
                    <PopoverArrow />
                    <PopoverCloseButton
                      bg="rgb(59, 182, 155)"
                      borderRadius="10px"
                      width="30px"
                    />
                    <PopoverHeader>
                      <h2>Stringency Index Explained</h2>
                    </PopoverHeader>
                    <PopoverBody>
                      Stringency Index 100 = strict and 0 = very lax
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </div>
              <p>{data.stringencyData.stringency}</p>
              
            </div>
            <p>
            <h3 className={css.headerthree}>Public events</h3>
            {data.policyActions[3].policy_value_display_field}
          </p>
          </div>

          
        </div>

        

        <div className={css.blueBox}>
          <h4>
            Comparison to <u>One Month</u> ago:
          </h4><br/>
          <div className={css.twoColumns}>
            <div><h4>Stringency Index</h4> {`${
            data2.stringencyData.stringency
          } this is a change of ${
            stringencyChange.toFixed(2) > 0
              ? `+${stringencyChange.toFixed(2)}`
              : stringencyChange.toFixed(2)
          }`}</div> 
             <div>
            <h4>Covid cases</h4>
            {formatNumber(data2.stringencyData.confirmed)}
          </div>
          </div>
          
          <br/>
          <p>{`This means that the country is ${stringencyWording} their Covid restrictions internally`}</p>
       
        </div>
          <p style={{textAlign:"right"}}>Current data shown for {data.stringencyData.country_code}. <br/> Last updated: {data.stringencyData.date_value}</p>
      </div>
    );
  }

  return (
    <div data-testid="travelrestrictions" className={css.container}>
      <h3>
        There is no data for this date, <br />
        try an older date please...
      </h3>
    </div>
  );
}

export default TravelRestrictionsDisplay;
