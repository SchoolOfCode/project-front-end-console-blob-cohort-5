import React from 'react';
import css from './UKPage.module.css';
import cn from 'classnames';

import SearchBar from '../SearchComponent/index.js'
import UKMap from '../UKMapComponent';
import UKRestrictionsDisplay from '../UkRestrictionsDisplay';



function UKPage () {

    let dataUK = {
        country:"England",
        covidHeadline:"Stay at Home",
        quarantineRestrictions:"Don't go out, or 14 day quarantine"
    }
    
return(
    <div>

    {/* <SearchBar />
    <UKRestrictionsDisplay /> */}
    <h1>UK Page</h1>
   <UKMap />

    </div>

);

}

export default UKPage;