import React, { useState } from "react";
import css from "./UKPage.module.css";
// import cn from "classnames";

import SearchBar from "../SearchComponent/index.js";
import UKMap from "../UKMapComponent";
import UKRestrictionsDisplay from "../UkRestrictionsDisplay";
import HotelWidget from "../Hotel Widget Component";

function UKPage() {
  const [searchCountry, setSearchCountry] = useState("");

  let dataUK = {
    country: "England",
    covidHeadline: "Stay at Home",
    quarantineRestrictions: "Don't go out, or 14 day quarantine",
  };

  return (
    <div className={css.UKpage}>
      <h1>UK Page</h1>
        <div>
          <SearchBar
            searchCountry={searchCountry}
            setSearchCountry={setSearchCountry}
            placeholderText="pick a place in UK"
          />
        </div>
      <div className={css.flexcontainer}>
        <div>
          <p>
            County:{dataUK.country}
            <br />
            covidHeadline: {dataUK.covidHeadline}
            <br />
            Restrictions: {dataUK.quarantineRestrictions}{" "}
          </p>
        </div>
        <div className ={css.HotelWidget}>
          <HotelWidget />
        </div>
        <div className ={css.UKRestrictionsDisplay}>
          <UKRestrictionsDisplay />
        </div>
        <div>
          <UKMap className ={css.UKMap} />
        </div>
      </div>
    </div>
  );
}

export default UKPage;
