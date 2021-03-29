import React, {useState} from 'react';
import css from './WorldPage.module.css';
import cn from 'classnames';
import SearchBar from '../SearchComponent/index.js'
import TravelRestrictionsDisplay from '../TravelRestrictionsDisplayComponent';
import FlightWidget from '../Fligh Widget Component';
import HotelWidget from '../Hotel Widget Component';
import WorldMap from '../Wold Map Component';





function WorldPage () {

    let wData = {
        england:{},
        spain:{
            countryName:"Spain",
            entryRestrictions: "No Entry Allowed",
            qurantineRestrictions:"14 day on arrival"
        }
    }

const [country, setCountry] = useState("spain")

return(
    <div>
    <SearchBar setSearchCountry={setCountry} searchCountry={country} placeholderText={"Search Country Here"}/>
    {/* searches database and brings back object for country */}
    <TravelRestrictionsDisplay data={wData[country]}/> 
    <FlightWidget />
    <HotelWidget />
<WorldMap/>
</div>

);

}

export default WorldPage;