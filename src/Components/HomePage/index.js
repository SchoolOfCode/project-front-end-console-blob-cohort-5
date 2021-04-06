import React from "react";
import Button from "../ButtonComponent/index";
import css from "./HomePage.module.css";
import { useHistory } from "react-router-dom";
import UKPage from "../UKMainPageComponent/index";
import WorldMainPageComponent from "../WorldMainPageComponent/index";

function HomePage() {
  let url = "https://localhost:5001/country";

  const getData = async () => {
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
  };

  const history = useHistory();

  return (
    <div className={css.main}>
      <div className={css.slogan}>
        <h1 style={{textAlign:"center"}}>We are your guide to travel safety.</h1>
        <div className={css.slogantext}>
        <h3>
          Sometimes you just need something simple, to help make the informed
          decision.
        </h3>
        <span>
       
       If you are thinking of visiting a place in the UK or abroad, 
     </span>
        <span>
          <b > TravelSafe</b> is your one stop app for all your latest travel safety
          concerns.
        </span>
       
      <br />
        <span> We are here to give you peace of mind for your travels, be safe in the
          knowledge <b>TravelSafe</b> has got you. Go ahead and get up to date information on covid rates & travel
       restrictions.
</span>
</div>
      </div>

      <div className={css.buttons}>
        <Button
          size="medium"
          text="Traveling Within UK"
          onClick={() => history.push("../UKPage")}
        />

        <Button
          size="medium"
          text="Traveling Abroad"
          onClick={() => history.push("../WorldPage")}
        />
      </div>

      {/* <div className={css.slogan}>
          <h2>In a world of constant noise...</h2> 
           <h5>TravelSafe will help you do just that. Check a place you need to travel to in the UK and be greeted with a simple breakdown of the Covid rate, to help you decide if that's a place you wnat to be visiting. Head to our World page and search any country worldwide and get access to a snippet of how that country is reacting to Covid with our Stringency data, and also whether their borders, workplaces and public spaces are under strict rules or flexible enough to make your trip worthwhile.</h5>
           
        </div> */}
    </div>
  );
}

export default HomePage;
