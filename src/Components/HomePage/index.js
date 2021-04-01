import React from 'react';
import Button from "../ButtonComponent/index";
import css from "./HomePage.module.css";
import { useHistory } from 'react-router-dom';
import logo from './animatedlogo.gif';


function HomePage() {

  const history = useHistory();

  return (

    <div className={css.main}>

      <div className={css.slogan}>
        <p>Text</p>
        <img src={logo} />
      </div>

      <div className={css.buttons}>
        <Button size="large" text="Traveling Within UK" handleclick={() => history.push('../UKPage')} />

        <Button size="large" text="Traveling Abroad" handleclick={() => history.push('../WorldPage')} />
      </div>
    </div>
  );
}


export default HomePage;
