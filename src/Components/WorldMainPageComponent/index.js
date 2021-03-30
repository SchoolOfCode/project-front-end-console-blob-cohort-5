import React from 'react';
import css from './WorldPage.module.css';
import cn from 'classnames';
import SearchBar from '../SearchComponent/index.js';
import TravelRestrictionsDisplay from '../TravelRestrictionsDisplayComponent';



function WorldPage () {

return(
    <div>
    <SearchBar />
    <TravelRestrictionsDisplay />
    </div>

);

}

export default WorldPage;