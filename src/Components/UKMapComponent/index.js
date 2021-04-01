
import React from "react";

function UKMap({width, height }) {
  return (
    //remove the div word from the tag, This is a react specific shortcut, that allows HTML to be put in
    //if we want to add a classname or any additional styling this would need to be a div tag
    <>
      <img src="https://thumbs.dreamstime.com/b/map-uk-orange-filled-color-80376995.jpg" width={width} height={height} />
    </>
  );

}

export default UKMap;
