import React from 'react';
import css from './UKPage.module.css';
import cn from 'classnames';
import SearchBar from '../SearchComponent/index.js';
import UKMap from '../UKMapComponent';
import UKRestrictionsDisplay from '../UkRestrictionsDisplay';
import HotelWidget from '../Hotel Widget Component';



function UKPage() {
{

    // let dataUK = {
    //     country:"England",
    //     covidHeadline:"Stay at Home",
    //     quarantineRestrictions:"Don't go out, or 14 day quarantine"
    }
    
return(
    <div className={css.main}>
    <h1>UK Page</h1>
    <SearchBar /> 
    <div className={css.container}>
    <UKRestrictionsDisplay /> 
    <UKMap />
    <HotelWidget />
    
    
   </div>

    </div>

);

}

export default UKPage;