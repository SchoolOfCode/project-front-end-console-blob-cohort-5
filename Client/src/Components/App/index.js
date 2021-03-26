import React, { useState,useEffect } from 'react';
import './App.css';
import Button from '../Button'

function App() {
  
 function testClick(){
   console.log("component works");
 }
   
 
  return (
    <div className="App">
      <Button text= "click me" handleclick = {testClick}/>
    </div>
  );

  }
export default App;
