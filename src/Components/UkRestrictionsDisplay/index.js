import React, {useState, useEffect} from 'react';
import css from './ukRestDisplay.module.css';
import cn from 'classnames'



function UKRestrictionsDisplay(data, color, size, heading) {
  let url = "https://localhost:5001/country";
  const [fetchedData, setFetchedData] = useState(null);
  const [click, setClick] = useState(true);


  useEffect(() => {
    const webScrapeFetch =async () => {
    
        let res = await fetch(url);
        let data = await res.json();
        setFetchedData(data);
        console.log(data);
    }
    webScrapeFetch()
  }, [click])

//   var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
function handleClick(){setClick(!click)}

if (fetchedData){
  return (
   <div className={cn(css[color], css[size])}>

     <h2>Current Gov Restrictions for Travel</h2>
     <p>
            {/* this section is webScraped */}
            <h2>Travelling within England:</h2>
            <p>{fetchedData[1].englandInternal.replace(/&#44;/g, ',')}</p>
            <br />
           
            <h2>Travellling within the UK:</h2>
           <h3>From England:</h3> <p>{fetchedData[1].toUkFromEngland.replace(/&#44;/g, ',')}</p>
            <br />
            <h3>To England:</h3> <p>{fetchedData[1].toEnglandFromUK.replace(/&#44;/g, ',')}</p>
          </p>
          {/* <h2>International Travel:</h2>
          <h3>From England:</h3> <p>{fetchedData[1].inetnationalFromEng.replace(/&#44;/g, ',')}</p>
            <br />
            <h3>To England:</h3> <p>{fetchedData[1].toEngfFromInt.replace(/&#44;/g, ',')}</p> */}
          
   </div>
  );
}
return (
<><h1>Loading...</h1>
{/* <button onClick={handleClick}>Check UK Gov Restrictions... </button> */}
</>)
}


export default UKRestrictionsDisplay;
