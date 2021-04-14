import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../Navbar";


//Lazy loading
const LazyHomePage = lazy(()=>import('../HomePage'));
const LazyUKPage = lazy(()=>import('../UKMainPageComponent'));
const LazyWorldPage = lazy(()=>import('../WorldMainPageComponent'));
const LazyWorldTrackerPage = lazy(()=>import('../WorldTrackerPage'));
const LazyTravelTipsPage = lazy(()=>import('../TravelTipsPageComponent'));


function App() {
  return (
    <div className="App">
    <link rel="icon" href="images/favicon.ico" />
    <Router>
    <nav className="nav-bar">

      </nav>
      <div>
     
<Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/UKPage"><LazyUKPage/></Route>
          <Route path="/WorldPage"><LazyWorldPage/></Route>
          <Route path="/WorldTracker"><LazyWorldTrackerPage/></Route>
          <Route path="/TravelTipsPage"><LazyTravelTipsPage/></Route>
          <Route path="/"><LazyHomePage /></Route>
        </Switch>
      </Suspense>
    </div>
    </Router>
    </div>
  );
}

export default App;
