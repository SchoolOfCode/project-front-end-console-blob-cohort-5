import React from 'react';
import css from './WorldPage.module.css';
import cn from 'classnames';
import SearchBar from '../SearchComponent/index.js'
import TravelRestrictionsDisplay from '../TravelRestrictionsDisplayComponent';
import FlightWidget from '../Fligh Widget Component';
import HotelWidget from '../Hotel Widget Component';


function WorldPage () {

return(
    <div>
    <SearchBar />
    <TravelRestrictionsDisplay />
    <FlightWidget />
    <HotelWidget />
    <WorldMap />
    </div>

);

}

export default WorldPage;