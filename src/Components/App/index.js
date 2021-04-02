import React from "react";
import Home from "../HomePage";
import UKPage from "../UKMainPageComponent";
import WorldPage from "../WorldMainPageComponent";
import WorldTrackerPage from "../WorldTrackerPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../Navbar";

function App() {
  return (
    <div className="App">
    <link rel="icon" href="images/favicon.ico" />
    <Router>
    <nav className="nav-bar">

      </nav>
      <div>
          {/* <Link to="/">Home</Link>
      
          <Link to="/UKPage">UK Page</Link>
          <Link to="/WorldPage">World Page</Link>
          <Link to="/WorldTracker">World Covid Tracker</Link> */}
<Navbar/>
      <Switch>
      

        <Route path="/UKPage"><UKPage/></Route>
        <Route path="/WorldPage"><WorldPage/></Route>
        <Route path="/WorldTracker"><WorldTrackerPage/></Route>
        <Route path="/"><Home /></Route>

      </Switch>
    </div>

   
    </Router>
    </div>
  );
}



export default App;
