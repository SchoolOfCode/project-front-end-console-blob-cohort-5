import React from 'react';
import css from './UKPage.module.css';
import cn from 'classnames';
import SearchBar from '../SearchComponent/index.js';
import UKRestrictionsDisplay from '../UkRestrictionsDisplay';
import UKMap from '../UKMapComponent';
import HotelWidget from '../Hotel Widget Component';


function UKPage () {

    let dataUK = {
        country:"England",
        covidHeadline:"Stay at Home",
        quarantineRestrictions:"Don't go out, or 14 day quarantine"
    }
    
return(
    <div>
    <SearchBar />
    <UKRestrictionsDisplay data={dataUK} />
    <UKMap />
    <HotelWidget />
    </div>

);

}

export default UKPage;