import React, { useState, useEffect } from 'react';
import css from './ukRestDisplay.module.css';
import cn from 'classnames'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react"



function UKRestrictionsDisplay(data, color, size, heading) {

  const [fetchedData, setFetchedData] = useState(null);
  const [click, setClick] = useState(true);
  const url = process.env.REACT_APP_URL
  console.log(url)


  useEffect(() => {
    const webScrapeFetch = async () => {

      let res = await fetch(url);
      console.log(url)
      let data = await res.json();
      setFetchedData(data);
      console.log(data);
    }
    webScrapeFetch()
  }, [click])


  function handleClick() { setClick(!click) }


while (!fetchedData) {
  return <h1>Loading...</h1>
} 
// (fetchedData){
  return (

    <div className = {css.customDiv}>
    <div className={cn(css[color], css[size])}>

      <h2 className={css.heading}>Current Gov Restrictions for Travel</h2>

      <Accordion colorScheme={"facebook"} allowToggle>
        <AccordionItem className={css.item}>

          <h2 class={css.customHeading}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Travelling within England:{" "}
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>

            <p>{fetchedData[1].englandInternal.replace(/&#44;/g, ",")}</p>

          </AccordionPanel>
        </AccordionItem>


        <AccordionItem className={css.item}>

          <h2 class={css.customHeading}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Travelling within the UK:{" "}
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <h3>from England...</h3>

            <p> {fetchedData[1].toUkFromEngland.replace(/&#44;/g, ",")}</p>
            <br />
            <h3>to England...</h3>
            <p>{fetchedData[1].toEnglandFromUK.replace(/&#44;/g, ",")}</p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className={css.item}>
          <h2 class={css.customHeading}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                International Travel:{" "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <h3>from England...</h3>{" "}
            <p>{fetchedData[1].inetnationalFromEng.replace(/&#44;/g, ",")}</p>
            <br />
            <h3>to England...</h3>{" "}
            <p>{fetchedData[1].toEngfFromInt.replace(/&#44;/g, ",")}</p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>

    </div>
  );
}
// return (
// <><h1>Loading...</h1>
// <button onClick={handleClick}>Check UK Gov Restrictions... </button>
// </>)
// }


export default UKRestrictionsDisplay;
