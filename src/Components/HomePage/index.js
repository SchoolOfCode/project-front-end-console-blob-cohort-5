import React from 'react';
import Button from "../ButtonComponent/index";
import css from "./HomePage.module.css";
import { useHistory } from 'react-router-dom';


function HomePage() {

  const history = useHistory();

  return (
  <div className={css.main}>
    <Button size="large" text="Traveling Within UK" handleclick={() => history.push('../UKPage')}/>
    <Button size="large" text="Traveling Abroad" handleclick={() => history.push('../WorldPage')}/>
    
  </div> 
  );
}


export default HomePage;
