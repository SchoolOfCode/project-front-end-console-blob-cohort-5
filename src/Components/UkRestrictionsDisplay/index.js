import React from 'react';
import css from './ukRestDisplay.module.css';
import cn from 'classnames'




function UKRestrictionsDisplay(data, color, size, heading) {

  const dummyData = {
    "travelingWithinUKToEngland": "not allowed :(",
    "travelingWithinUKFromEngland": "not allowed :(",
    "travelingWithinEnglandParagraph": "not allowed"
  };


  return (
   <div className={cn(css[color], css[size])}>
     <h2>Traveling within UK</h2>
     <p>{dummyData.travelingWithinUKToEngland}</p>
     <p>{dummyData.travelingWithinUKFromEngland}</p>
     <h2>Traveling within England</h2>
     <p>{dummyData.travelingWithinEnglandParagraph}</p>

   </div>
  );
}


export default UKRestrictionsDisplay;
