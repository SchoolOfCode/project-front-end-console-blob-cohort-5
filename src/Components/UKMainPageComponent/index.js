import React from 'react';
import css from './UKPage.module.css';
import cn from 'classnames';
import SearchBar from '../SearchComponent/index.js'
import UKRestrictionsDisplay from '../UkRestrictionsDisplay';


function UKPage () {

return(
    <div>
    <SearchBar />
    <UKRestrictionsDisplay />
    </div>

);

}

export default UKPage;