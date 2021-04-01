import React from "react";
import Home from "../HomePage";
import UKPage from "../UKMainPageComponent";
import WorldPage from "../WorldMainPageComponent";
import WwTracker from "../WorlWideCovidTracker"


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../Navbar";

function App() {
  return (
    <div className="App">
    <Router>
    <nav className="nav-bar">

      <div>

          {/* <Link to="/">Home</Link>
      
          <Link to="/UKPage">UK Page</Link>
          <Link to="/WorldPage">World Page</Link>
          <Link to="/WorldTracker">World Covid Tracker</Link> */}
<Navbar/>
      <Switch>
      

        <Route path="/UKPage"><UKPage/></Route>
        <Route path="/WorldPage"><WorldPage/></Route>
        <Route path="/WorldTracker"><WwTracker/></Route>
        <Route path="/"><Home /></Route>

      </Switch>
    </div>

    </nav>
    </Router>
    </div>
  );
}



export default App;
