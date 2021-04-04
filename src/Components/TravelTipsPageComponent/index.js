import React from 'react';
import css from './travelTipsPage.module.css';
import logo from './image.gif';

function TravelTipsPage(){

return(

<div className={css.container}>

<div className={css.columnone}><h1>Travel Safely</h1>
<div>
<span>Check out our tips for travelling safe.</span></div>

<div className={css.text}>
<h3>Domestic Trip</h3>

<ul>
    <li>Wash your hands often or use hand sanitizer. </li>
    <li>Self-monitor for COVID-19 symptoms; isolate and get tested if you develop symptoms.
</li>
    <li>Do not travel if you have symtoms of COVID-19.</li>
    <li>Maintain a distance of six feet/ 2 metres or more from people outside your household</li>
    

</ul>

<h3>If you are flying or taking the train</h3>
<ul>
    <li>Wear a mask over your nose and mouth.</li>
    <li>Avoid crowds as possible at airports, bus/train stations.</li>
    <li>Wash your hands often or use hand sanitizer.</li>
    <li>Do not travel if you have symtoms of COVID-19.</li>
    <li>Purchase a travel insurance that include cover for COVID-19.</li>
    
    
</ul>
<p>Remember that even if you have been vaccinated, you still need to wear a mask and social distance, lower the risk of spreading coronavirus.</p>
</div>
</div>
<div className={css.columntwo}><img src={logo}></img></div>
</div>



);



}

export default TravelTipsPage;