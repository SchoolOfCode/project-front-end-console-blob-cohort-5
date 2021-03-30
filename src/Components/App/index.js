import React from 'react';
import Button from '../ButtonComponent/index.js'
import Navbar from '../Navbar/index.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import



  function App() {

    return (

      <div>
        <Router>
          <Navbar />
        </Router>
        <Switch>
          <Route path="">
        </Switch>


          <Button variant="large" text="Uk" />
          <Button variant="large" text="Abroad" />


    </div>


  )
};

export default App;