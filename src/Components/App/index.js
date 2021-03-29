import React from 'react';
import Button from '../ButtonComponent/index.js'
import Navbar from '../Navbar/index.js'
import { BrowserRouter as Router } from 'react-router-dom';




function App() {

  return (

    <div>
      <Router>
        <Navbar />
      </Router>

      <Button variant="large" text="Uk" />
      <Button variant="large" text="Abrod" />
      <Navbar />

    </div>


  )
};

export default App;