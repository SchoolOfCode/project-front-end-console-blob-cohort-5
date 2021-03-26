import React from 'react';
import css from './travelRestrictDisplay.module.css';
import cn from 'classnames'

function TravelRestrictionsDisplay({ data, color, size, imgSize }) {
  return (
    <div className={cn(css[color], css[size])}>
      <h1>{data.countryName}</h1>
      <p>{data.entryRestrictions}</p>
      <p>{data.quarantineRestirctions}</p>
      <img className={cn(css[imgSize])} src={data.imgSrc} alt="Country Flag" />
    </div>
  );
}

// { backgroundColor: 'red' }

//Display 
//Country Name
//Country Flag 
//Country Entry Req 
//Country Quarantine Requirements

//Props
// Data Object  



export default TravelRestrictionsDisplay;
