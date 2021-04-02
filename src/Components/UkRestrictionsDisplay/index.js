import React, {useState, useEffect} from 'react';
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
  let url = "http://localhost:5000/country";
  const [fetchedData, setFetchedData] = useState(null);
  const [click, setClick] = useState(true);


  useEffect(() => {
    const webScrapeFetch =async () => {
    
        let res = await fetch(url);
        let data = await res.json();
        setFetchedData(data);
        console.log(data);
    }
    webScrapeFetch()
  }, [click])


function handleClick(){setClick(!click)}

if (fetchedData){
  return (
   <div className={cn(css[color], css[size])}>

     <h2>Current Gov Restrictions for Travel</h2>
    
          <Accordion colorScheme={"facebook"}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="left">
        Travelling within England:        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {fetchedData[1].englandInternal.replace(/&#44;/g, ',')}
    </AccordionPanel>
  </AccordionItem>

  
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="left">
        Travelling within the UK:     </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <h3>from England...</h3>
    {fetchedData[1].toUkFromEngland.replace(/&#44;/g, ',')}<br />
    <h3>to England...</h3>
    {fetchedData[1].toEnglandFromUK.replace(/&#44;/g, ',')}
    </AccordionPanel>
  </AccordionItem>

 
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="left">
       International Travel:   </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <h3>from England...</h3> <p>{fetchedData[1].inetnationalFromEng.replace(/&#44;/g, ',')}</p>
            <br />
            <h3>to England...</h3> <p>{fetchedData[1].toEngfFromInt.replace(/&#44;/g, ',')}</p>
    </AccordionPanel>
  </AccordionItem>
  
</Accordion>
   
          
   </div>
  );
}
return (
<><h1>Loading...</h1>
{/* <button onClick={handleClick}>Check UK Gov Restrictions... </button> */}
</>)
}


export default UKRestrictionsDisplay;
