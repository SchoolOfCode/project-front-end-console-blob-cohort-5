import React, {useState} from 'react';
import cn from 'classnames';
import css from './travelRestrictDisplay.module.css'

function TravelRestrictionsDisplay({data, data2, color}) {
console.log(data)


  if(data?.policyActions && data.stringencyData.country_code != undefined && data.policyActions.length > 1 && data2?.policyActions && data2.stringencyData.country_code != undefined && data2.policyActions.length > 1 ){
    return (
      <div data-testid="travelrestrictions">
        <div className={cn(css[color])}>
          <p>{`${data.stringencyData.country_code}`}</p>
      <p>{`Border Status: ${data.policyActions[7].policy_value_display_field}`}</p>
      <p>{` Border Status Code: ${data.policyActions[7].policyvalue}`}</p>

      <p>0 - No measures 1 - Screening 2 - Quarantine arrivals from high-risk regions 3 - Ban on arrivals from some regions 4 – Ban on all regions or total border closure</p>
{/* <p>{` Border Notes: ${data.policyActions[7].notes}`}</p> */}

      <p>{` WorkPlace Status: ${data.policyActions[0].policy_value_display_field}`}</p>
      <p>{` WorkPlace Status Code: ${data.policyActions[0].policyvalue}`}</p>

      <p>0 - No measures 1 - recommend closing (or work from home) 2 - require closing (or work from home) for some sectors or categories of workers 3 - require closing (or work from home) all-but-essential workplaces (e.g. grocery stores, doctors) No data - blank</p>
{/* <p>{` WorkPlace Notes: ${data2.policyActions[0].notes}`}</p> */}

      <p>{` What about FaceMasks? ${data.policyActions[17].policy_value_display_field}`}</p>
      <p>{` Public Events: ${data.policyActions[3].policy_value_display_field}`}</p>

      <p>{` Stringency Index 100 = strict and 0 = very lax: ${data.stringencyData.stringency}`}</p>
      <p>{` Covid Cases: ${data.stringencyData.confirmed}`}</p>
</div>

<div className={css.blueBox}>
<p>Comparison to Start of the Month:</p>
      <p>{` Stringency Index 100 = strict and 0 = very lax: ${data2.stringencyData.stringency}`}</p>
      <p>{` Covid Cases: ${data2.stringencyData.confirmed}`}</p>
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







