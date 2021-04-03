import React, { useState } from 'react';
import WwTracker from '../WorldWideCovidTracker';
import css from './worldTracker.module.css';







function WorldTrackerPage() {

  


  return (
      <div className={css.page}>

    <div className={css.container}>
<WwTracker/>
    <h1>Search here for up to data covid dase and death rates</h1>
    </div>
      </div>

  );

};

export default WorldTrackerPage;

