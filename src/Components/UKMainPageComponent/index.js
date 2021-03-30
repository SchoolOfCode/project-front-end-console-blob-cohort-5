import React from 'react';
import css from './UKPage.module.css';
import cn from 'classnames';
import HotelWidet from '../Hotel Widget Component';
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
    <div>
    <h1>UK Page</h1>
    <HotelWidget />
    <SearchBar /> 
    <UKRestrictionsDisplay /> 
    
   <UKMap />

    </div>

);

}

export default UKPage;