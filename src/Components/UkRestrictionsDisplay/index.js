import React from 'react';
import css from './ukRestDisplay.module.css';
import cn from 'classnames'




function UKRestrictionsDisplay(data, color, size, heading) {

  let dataUK = {
    country: "England",
    covidHeadline: "Stay at Home",
    quarantineRestrictions: "Don't go out, or 14 day quarantine",
  };


  return (
   <div className={cn(css[color], css[size])}>

     <h2>Current Gov Restrictions for Travel</h2>
     <p>
            {/* this section is webScraped */}
            County:{dataUK.country}
            <br />
            covidHeadline: {dataUK.covidHeadline}
            <br />
            Restrictions: {dataUK.quarantineRestrictions}{" "}
          </p>


   </div>
  );
}


export default UKRestrictionsDisplay;
