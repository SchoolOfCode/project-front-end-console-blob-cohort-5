import React from 'react';
import Button from "../ButtonComponent/index";
import css from "./HomePage.module.css";
import { useHistory } from 'react-router-dom';




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
    <Button size="large" text="Traveling Within UK" handleclick={() => history.push('../UKPage')}/>
    <Button size="large" text="Traveling Abroad" handleclick={() => history.push('../WorldPage')}/>
    <Button handleclick={getData} />
    
  </div> 
  );
}


export default HomePage;
