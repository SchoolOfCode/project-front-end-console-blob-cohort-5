import React from 'react';

function HotelWidget(destinationName){
return(
    <>
    <p>test hotel widget</p>
<div data-skyscanner-widget="HotelSearchWidget" data-destination-name={destinationName}></div>
<script src="https://widgets.skyscanner.net/widget-server/js/loader.js" async></script> 
</>
);
}

export default HotelWidget;
