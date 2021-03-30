import React from 'react';

function FlightWidget(destinationName){
return (
    <div>
        <div data-skyscanner-widget="SearchWidget" data-origin-geo-lookup="true" data-destination-name="'Edinburgh'"

></div>
<script src="https://widgets.skyscanner.net/widget-server/js/loader.js" async></script>

    </div>
)
}

export default FlightWidget