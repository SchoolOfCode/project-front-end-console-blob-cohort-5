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
          placeholderText="Pick a place in UK..."
        />
      </div>
      <div className={css.flexcontainer}>
        <div className={css.flexLeft}>
          <div className={css.WebScrapeInfo}>
            <p>
              {/* this section is webScraped */}
              County:{dataUK.country}
              <br />
              covidHeadline: {dataUK.covidHeadline}
              <br />
              Restrictions: {dataUK.quarantineRestrictions}{" "}
            </p>
          </div>
          <div className={css.UKRestrictionsDisplay}>
            {/* this is the API */}
            <UKRestrictionsDisplay />
          </div>
        </div>

        <div className={css.flexRight}>
          <div className={css.UKMap}>
            <UKMap width="25%" />
          </div>
          <div className={css.HotelWidget}>
            <HotelWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UKPage;
