import React, { useState } from 'react';
import WwTracker from '../WorldWideCovidTracker';
import css from './worldTracker.module.css';







function WorldTrackerPage() {

  


  return (
      <div className={css.page}>
      <div className={css.title}>
     <h1>World Tracker</h1> 
     <h3>Find the latest Covid-19 statistics</h3>
     </div>
    <div className={css.container}>
<WwTracker/>
    
    </div>
      </div>

  );

};

export default WorldTrackerPage;

