import React from "react";
import WwTracker from "../WorldWideCovidTracker";
import css from "./worldTracker.module.css";

function WorldTrackerPage() {
  return (
    <div className={css.page}>
      <div className={css.title}>
        <div>
          {" "}
          <h1>World Tracker</h1>{" "}
        </div>
        <div>
          <span>Find the latest Covid-19 statistics</span>
        </div>
      </div>
      <div className={css.container}>
        <WwTracker />
      </div>
    </div>
  );
}

export default WorldTrackerPage;
