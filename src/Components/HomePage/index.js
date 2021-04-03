import React from 'react';
import Button from "../ButtonComponent/index";
import css from "./HomePage.module.css";
import { useHistory } from 'react-router-dom';
import logo from './animatedlogo.gif';




function HomePage() {

  let url= "https://localhost:5001/country";
  
   
      const getData = async () => {
        let res = await fetch(url);
        let data = await res.json();
        
        console.log(data);
      };
      



  const history = useHistory();

  return (


    <div className={css.main}>

      <div className={css.slogan}>
        <h1>We are your guide to travel safely.</h1>
        
      </div>

      <div className={css.buttons}>
        <Button size="medium" text="Traveling Within UK" handleclick={() => history.push('../UKPage')} />

        <Button size="medium" text="Traveling Abroad" handleclick={() => history.push('../WorldPage')} />
      </div>
    </div>

  );
}


export default HomePage;
