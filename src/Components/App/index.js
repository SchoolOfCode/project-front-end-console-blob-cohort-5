import React from "react";
import Home from "../HomePage";
import UKPage from "../UKMainPageComponent";
import WorldPage from "../WorldMainPageComponent";
import WorldTrackerPage from "../WorldTrackerPage";
import TravelTipsPage from '../TravelTipsPageComponent'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../Navbar";




function App() {
  return (
    <div className="App">
    <link rel="icon" href="images/favicon.ico" />
    <Router>
    <nav className="nav-bar">

      </nav>
      <div>
     
<Navbar/>
      <Switch>
        <Route path="/UKPage"><UKPage/></Route>
        <Route path="/WorldPage"><WorldPage/></Route>
        <Route path="/WorldTracker"><WorldTrackerPage/></Route>
        <Route path="/TravelTipsPage"><TravelTipsPage/></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
