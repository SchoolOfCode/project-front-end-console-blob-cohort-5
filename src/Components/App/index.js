import React from 'react';
import Button from '../ButtonComponent/index.js';
import Navbar from '../Navbar/index.js';
import UKPage from '../UKMainPageComponent';
import WorldPage from "../WorldMainPageComponent";
import WwTracker from "../WorldWideCovidTracker";



  function App() {

    return (
      <Router>
      <div>
            <nav>
                
                                  
               
                
                    <Link to="/" >
                        Home
                </Link>
                    <Link to="/UKPage" >
                        UK
                    </Link>
                    <Link to="/WorldPage" >
                        Abroad
                    </Link>
                    <Link to="/WwTracker" >
                        World Stats
                </Link>
                
            </nav>

        
          
        
        <Switch>
        
          <Route path="/UKPage"><UKPage /> </Route>
          <Route path="/WorldPage"><WorldPage /> </Route>
          
          <Route path="/WwTracker"><WwTracker /> </Route>
          <Route path="/"><App /> </Route>
        </Switch>
        </div>
        
</Router>




          {/* {/* <Button variant="large" text="Uk" />
          <Button variant="large" text="Abroad" /> */}
           */}



  );
}

export default App;