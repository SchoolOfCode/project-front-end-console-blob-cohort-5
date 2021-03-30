import React from 'react';
import css from "./hotelWidgetComponent.module.css";

function HotelWidget(destinationName){
return(
    <div>
<div>
<iframe class={css.widget} src="https://widgets.skyscanner.net/widget-server/widgets/iframe?skyscannerWidget=HotelSearchWidget&locale=en-GB&market=GB&currency=GBP"
></iframe>

    </div>
</div>
);
}

//For best presentation on your landing page, ensure that the widget is in a container with a width of at least 250px, otherwise you may experience styling issues.


export default HotelWidget;
