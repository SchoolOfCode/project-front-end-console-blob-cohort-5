import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../Navbar";
import HomePage from "../HomePage";
import UKPage from '../UKMainPageComponent';
import WorldPage from '../WorldMainPageComponent';
import WorldTrackerPage from '../WorldTrackerPage';
import TravelTipsPage from '../TravelTipsPageComponent';
//Lazy loading
const LazyWorldPage = lazy(()=>import('../WorldMainPageComponent'));
const LazyWorldTrackerPage = lazy(()=>import('../WorldTrackerPage'));
const LazyTravelTipsPage = lazy(()=>import('../TravelTipsPageComponent'));
const LazyUKPage = lazy(()=>import('../UKMainPageComponent'));
function App() {

  return (
    <div className="App">
    <link rel="icon" href="images/favicon.ico" />
    <Router>
    <nav className="nav-bar">

      </nav>
      <div>
     
<Navbar/>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
        
          <Route path="/UKPage"><UKPage/></Route>
          <Route path="/WorldPage"><LazyWorldPage/></Route>
          <Route path="/WorldTracker"><LazyWorldTrackerPage/></Route>
          <Route path="/TravelTipsPage"><LazyTravelTipsPage/></Route>
          <Route path="/"><HomePage /></Route>
          
        </Switch>
        </Suspense>
      {/* </Suspense> */}
      
    </div>
    </Router>
    </div>
  );
}

export default App;
