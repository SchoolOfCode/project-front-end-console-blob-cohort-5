import React from 'react';
import Button from "../ButtonComponent/index";
import css from "./HomePage.module.css";
import { useHistory } from 'react-router-dom';
import logo from '../Navbar/TS.png';
import ComboBox from "../SerchTest"




function HomePage() {

  let url= "https://localhost:5001/country";
  
   
      const getData = async () => {
        let res = await fetch(url);
        let data = await res.json();
        
        console.log(data);
      };
      



  const history = useHistory();

  return (

<>
    <div className={css.main}>

        <div className={css.slogan}>
          <div><h1>Travel.Safe</h1> <br/> <h2>Check before you commit</h2></div>
          <img src={logo} style={{height:"200px"}} />
        </div>

          <div className={css.buttons}>
          
        <Button size="large" text="Traveling Within UK" handleclick={() => history.push('../UKPage')} />

        <Button size="large" text="Traveling Abroad" handleclick={() => history.push('../WorldPage')} />
    </div>
       
        <div className={css.slogan2}>
          <h2>In a world of constant noise...</h2> 
            <h3>...sometimes you just need something simple, to help make the informed decision.</h3>
            <h5>TravelSafe will help you do just that. Check a place you need to travel to in the UK and be greeted with a simple breakdown of the Covid rate, to help you decide if that's a place you wnat to be visiting. Head to our World page and search any country worldwide and get access to a snippet of how that country is reacting to Covid with our Stringency data, and also whether their borders, workplaces and public spaces are under strict rules or flexible enough to make your trip worthwhile.</h5>
        </div>
    </div>

</>
  );
}


export default HomePage;
