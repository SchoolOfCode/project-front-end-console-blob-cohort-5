import React from 'react';



function UkGovApiDisplay({data, search=0}) {
let color = ""
   if (data[search]?.Rate.PublishDate>5000 && data[search]?.Rate.PublishDate<8000){
        color="orange"
   }
   else if (data[search]?.Rate.PublishDate>=8000){
    color="red"
} else if (data[search]?.Rate.PublishDate<=5000){
    color="blue"}
    // console.log(data)
  return (
   <div>
     <p>Cumulative Cases: {data[search]?.cases.cumulative}</p>
     <p style={{color:color}}>Covid Rate per 100k of Population: {data[search]?.Rate.PublishDate}</p>
     <p>Last Updated on: {data[search]?.date}</p>
     <h2>{data[search]?.areaName}</h2>

   </div>
  );
}


export default UkGovApiDisplay;
