import React from 'react';
import Button from "../ButtonComponent/index";
import css from "./HomePage.module.css";
import MyMap from "../World Map Component/MyMap"

function HomePage() {
  return (
  <div className={css.main}>
    <Button size="large" text="Traveling Within UK"/>
    <Button size="large" text="Traveling Abroad"/>
    
  </div> 
  );
}


export default HomePage;
