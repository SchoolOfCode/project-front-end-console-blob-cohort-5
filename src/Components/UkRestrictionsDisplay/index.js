import React from 'react';
import css from './ukRestDisplay.module.css';
import cn from 'classnames'




function UKRestrictionsDisplay(data, color, size, heading) {

  const dummyData = {
    "travelingWithinUKToEngland": "Birmingham",
    "travelingWithinUKFromEngland": "Case rate",
    "travelingWithinEnglandParagraph": "case rate change"
  };


  return (
   <div className={cn(css[color], css[size])}>

     <h2>Region stats</h2>
     <p>{dummyData.travelingWithinUKToEngland}</p>
     <p>{dummyData.travelingWithinUKFromEngland}</p>
     <h2>change since last week</h2>
     <p>{dummyData.travelingWithinEnglandParagraph}</p>


   </div>
  );
}


export default UKRestrictionsDisplay;
